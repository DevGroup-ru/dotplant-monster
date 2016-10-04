#!/bin/bash
phpcs --extensions=php --standard=ruleset.xml -p --colors --report=full --report-file=report src/
