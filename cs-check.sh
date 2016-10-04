#!/bin/bash
phpcs --extensions=php --standard=~/.composer/vendor/yiisoft/yii2-coding-standards/Yii2/ -p --colors --report=full --report-file=report src/
