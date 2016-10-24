<?php

namespace DotPlant\Monster;

use DotPlant\Monster\Editable\EditableFactory;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Finder\SplFileInfo;
use yii;
use yii\base\Component;

class Repository extends Component
{
    use HasMonsterCache;

    /** @var Bundle[] */
    public $bundles = [];

    /** @var bool  */
    public $bundlesLoaded = false;

    public $coreBundlesLocation = '';

    public $bundlesLocation = '@app/monster/bundles/';
    public $bundleLocationLookup = '*/bundle/';

    const CACHE_KEY_BUNDLES = 'bundles';
    const CACHE_LIFETIME_BUNDLES = 2592000; // 7days

    public $editableConfig = [];

    protected $editable;

    /** @inheritdoc */
    public function init()
    {
        parent::init();
        if ($this->coreBundlesLocation === '') {
            $this->coreBundlesLocation = __DIR__ . '/base-bundle/';
        }

        if (count($this->bundles) !== 0) {
            $this->bundlesLoaded = true;
        } else {
            $this->loadBundles();
        }
    }

    /**
     * @return EditableFactory
     * @throws \yii\base\InvalidConfigException
     */
    public function editable()
    {
        if ($this->editable === null) {
            $this->editable = Yii::createObject(EditableFactory::class, $this->editableConfig);
        }
        return $this->editable;
    }

    /**
     * Loads bundles
     * @param bool $force Force loading even if already loaded and cache is not expired
     */
    public function loadBundles($force = false)
    {
        $this->bundles = $this->cache()->get(static::CACHE_KEY_BUNDLES);
        if ($this->bundles === false || $force === true) {
            // no cache provided - reload bundles from scratch
            $this->reloadBundles();
        }

    }

    public function autoloadAssets()
    {
        Yii::trace("Autoload assets");
        foreach ($this->bundles as $bundle) {
            if ($bundle->autoloadCss || $bundle->autoloadJs) {
                $bundle->publishAssets();
            }
        }
    }

    /**
     * Reloads all bundles by going through all installed bundles and refilling cache file
     */
    public function reloadBundles()
    {
        $this->bundles = [];
        if ($this->coreBundlesLocation !== false) {
            $normalizedCoreBundles = HasFilesystemRepresentation::normalizePath(
                Yii::getAlias($this->coreBundlesLocation)
            );
            $coreBundles = [
                'bundle',
                'core',
                'visual-builder',
            ];
            foreach ($coreBundles as $bundle) {
                $this->loadBundle(
                    $normalizedCoreBundles . $bundle
                );
            }
        }

        // load third-party bundles
        $finder = new Finder();
        try {
            $finder
                ->directories()
                ->in(
                    HasFilesystemRepresentation::normalizePath(
                        Yii::getAlias($this->bundlesLocation)
                    ) .
                    $this->bundleLocationLookup
                )
                ->ignoreUnreadableDirs()
                ->followLinks()
                ->sortByName()
                ->depth('== 0');

            foreach ($finder as $directory) {
                /** @var SplFileInfo $directory */
                $this->loadBundle(dirname($directory->getRealPath()));
            }
        } catch (\InvalidArgumentException $e) {
        }
        $finder = null;
        unset($finder);
        gc_collect_cycles();


        $this->updateBundlesCache();
    }

    /**
     * Loads exact bundle
     * @param string $path Absolute filesystem path to bundle folder
     */
    protected function loadBundle($path)
    {
        $bundle = new Bundle($path);
        $bundle->process();
        if ($bundle->id === null) {
            Yii::error("Bundle for path $path is in unknown format(no id or bad manifest)");
            return;
        }
        if (array_key_exists($bundle->id, $this->bundles)) {
            Yii::error("Bundle with id {$bundle->id} already loaded.");
            return;
        }

        $this->bundles[$bundle->id] = $bundle;
    }

    public function updateBundlesCache()
    {
        // update cache
        $this->cache()->set(
            static::CACHE_KEY_BUNDLES,
            $this->bundles,
            static::CACHE_LIFETIME_BUNDLES
        );
    }

    /**
     * Returns loaded bundle by full namespaced path.
     *
     * @param string $path Path in format "namespace.bundle-id"
     *
     * @return \DotPlant\Monster\Bundle|null
     */
    public function bundle($path)
    {
        list($namespace, $id) = explode('.', $path . ".\1");
        $path = "$namespace.$id";
        foreach ($this->bundles as &$bundle) {
            if ($path === $bundle->namespace . '.' . $bundle->id) {
                return $bundle;
            }
        }
        return null;
    }

    /**
     * Returns loaded group by full namespaced path.
     * @param string $path Path in format "namespace.bundle-id.group-id"
     *
     * @return \DotPlant\Monster\Bundle\Group|null
     */
    public function group($path)
    {
        list($namespace, $bundleId, $groupId) = explode('.', $path . ".\1.\2");
        $bundle = $this->bundle($namespace . '.' . $bundleId);
        if ($bundle === null) {
            return null;
        }
        return $bundle->group($groupId);
    }

    /**
     * Returns loaded material by full namespaced path.
     * @param string $path Path in format "namespace.bundle-id.group-id.material.id"
     *
     * @return \DotPlant\Monster\Bundle\Material|null
     */
    public function material($path)
    {
        list($namespace, $bundleId, $groupId, $materialId) = explode('.', $path . ".\1.\2.\3");
        $group = $this->group($namespace . '.' . $bundleId . '.' . $groupId);
        if ($group === null) {
            return null;
        }
        return $group->material($materialId);
    }

    public function dataForBuilder()
    {
        $result = [];
        foreach ($this->bundles as $bundle) {
            if ($bundle->hidden) {
                continue;
            }
            $result [] = $bundle->dataForBuilder();
        }
        return $result;
    }
}
