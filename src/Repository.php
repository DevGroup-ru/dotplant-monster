<?php

namespace DotPlant\Monster;

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

    public $coreBundleLocation = '@vendor/devgroup/frontend-monster/';

    public $bundlesLocation = '@app/monster/bundles/';
    
    const CACHE_KEY_BUNDLES = 'bundles';
    const CACHE_LIFETIME_BUNDLES = 2592000; // 7days

    /** @inheritdoc */
    public function init()
    {
        parent::init();
        
        if (count($this->bundles) !== 0) {
            $this->bundlesLoaded = true;
        } else {
            $this->loadBundles();
        }
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

    /**
     * Reloads all bundles by going through all installed bundles and refilling cache file
     */
    public function reloadBundles()
    {
        $this->bundles = [];
        if ($this->coreBundleLocation !== false) {
            $this->loadBundle(
                HasFilesystemRepresentation::normalizePath(
                    Yii::getAlias($this->coreBundleLocation)
                ) .
                'bundle/'
            );
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
                    '*/bundle/'
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
}
