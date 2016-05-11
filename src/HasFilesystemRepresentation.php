<?php

namespace DotPlant\Monster;

use yii;

/**
 * Class HasFilesystemRepresentation is used as base class for all stuff having filesystem representation(ie. manifest).
 *
 * @package DotPlant\Monster
 */
trait HasFilesystemRepresentation
{
    /** @var string Location on filesystem - absolute path */
    protected $fsLocation;

    /** @var string Base directory with trailing slash at the end */
    protected $baseDirectory = '';
    

    /**
     * @param string $fsLocation
     */
    public function setFsLocation($fsLocation)
    {
        $this->fsLocation = static::normalizePath($fsLocation);
    }

    /**
     * @return string
     */
    public function getFsLocation()
    {
        return $this->fsLocation;
    }

    /**
     * @return string Base directory
     */
    public function getBaseDirectory()
    {
        if ($this->baseDirectory === '') {
            if (is_file($this->fsLocation)) {
                $this->baseDirectory = dirname($this->fsLocation);
            } else {
                $this->baseDirectory = $this->fsLocation;
            }
            $this->baseDirectory = static::addTrailingSlash($this->baseDirectory);
        }
        return $this->baseDirectory;
    }

    /**
     * Adds trailing slash to path.
     * No check for directory is performed.
     * @param string $path
     *
     * @return string
     */
    public static function addTrailingSlash($path)
    {
        return rtrim($path, '/') . '/';
    }

    /**
     * Normalizes path: reads link, adds trailing slash if directory.
     * @param string $path
     *
     * @return string
     */
    public static function normalizePath($path)
    {
        if (is_link($path)) {
            $path = readlink($path);
        }
        if (is_dir($path)) {
            $path = static::addTrailingSlash($path);
        }
        return $path;
    }
}
