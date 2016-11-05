<?php

namespace DotPlant\Monster\exceptions;

use yii;

class MonsterViewException extends \RuntimeException
{
    public function __construct($viewFile, $data, \Exception $previous)
    {
        $message = Yii::t(
            'app',
            "Exception during rendering Monster View file {viewFile} with data {data}",
            [
                'viewFile' => $viewFile,
                'data' => yii\helpers\VarDumper::dumpAsString($data)
            ]
        );
        $code = 1;
        parent::__construct($message, $code, $previous);
    }
}
