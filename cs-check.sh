#!/bin/bash
phpcs --standard=PSR1,PSR2 -p --colors --report=full --report-file=report src/
