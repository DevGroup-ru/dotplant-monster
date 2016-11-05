# Условия в BEMJSON шаблонах монстра

Реализация матчера в `src/base-bundle/core.bh.php` секция conditions.

Пример условия:

```
{
  "block": "test",
  "content": [
    {
      "if": "$data['foo'] === $data['bar']",
      "true": {
        "elem": "true",
        "content": "OK"
      },
      "false": {
        "elem": "false",
        "content": "not ok"
      }
    }
  ]
}
```

Рендерится в шаблон:

```php
<div class="test">
<?php if ($data['foo'] === $data['bar']): ?>
    <div class="test__true">OK</div>
<?php else: ?>
    <div class="test__false">not ok</div>
<?php endif; ?>
</div>
```


## Структурно это выглядит так:
```
{
    "if": "условие в виде php",
    "true": {
        // bemjson в случае, если истино
    },
    "false": {
        // bemjson в случае, если ложно
    }
}
```

В жизни можно посмотреть в `DotPlant\Monster\tests\BhTest::testConditions`.
