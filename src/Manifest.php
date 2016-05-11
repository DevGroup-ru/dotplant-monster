<?php

namespace DotPlant\Monster;

use yii;

/**
 * Class Manifest
 *
 * @package DotPlant\Monster
 */
class Manifest
{
    use HasFilesystemRepresentation;
    use DescribableBundleEntity;

    /** @var bool  */
    private $manifestLoaded = false;

    /** @var BundleEntity */
    private $parentEntity;

    /**
     * Manifest constructor.
     *
     * @param string                         $manifestFilePath
     * @param \DotPlant\Monster\BundleEntity $parentEntity
     */
    public function __construct($manifestFilePath, BundleEntity $parentEntity)
    {
        $this->setFsLocation($manifestFilePath);
        $this->parentEntity = &$parentEntity;
    }

    public function ensureManifestLoaded()
    {
        if ($this->manifestLoaded === false) {
            if (is_readable($this->getFsLocation()) === false) {
                throw new \RuntimeException("Can't load manifest: " . $this->getFsLocation());
            }
            $content = file_get_contents($this->getFsLocation());
            $content = yii\helpers\Json::decode($content);
            foreach ($content as $key => $value) {
                if (property_exists($this, $key)) {
                    $this->$key = $value;
                }
                if (property_exists($this->parentEntity, $key)) {
                    $this->parentEntity->$key = $value;
                }
            }
            $this->manifestLoaded = true;
        }
    }
}
