<?php

namespace DotPlant\Monster;

use DotPlant\Monster\Bundle\Material;
use yii;
use yii\base\Event;

class MaterializeEvent extends Event
{
    /** @var Material */
    public $material;
    
    /** @var array */
    public $materializeData;

    /** @var string */
    public $uniqueContentId;
    /** @var string */
    public $materialIndex;
    /** @var array */
    public $customizedBhMatchersIds;
    /** @var string */
    public $content;
    /** @var string */
    public $templateFilename;

    /** @var boolean */
    public $editMode = false;
}
