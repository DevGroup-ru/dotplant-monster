# Сервисные шаблоны в монстре

## Введение

**Сервисный шаблон** - специальная модель, описывающая какой Layout и Template используется при рендеринге action-ов, в которых нет как таковой сущности.

Пример таких action-ов:

- Корзина
- Страница логина
- Страница выдачи результатов поиска

Поскольку рендеринг идёт средствами монстра - имеется специальный класс универсального действия - `ServiceMonsterAction`.
Данный класс наследуется от `MainEntity` и в качестве сущности создаёт фейковую сущность `ServiceEntity` на основе переданного `serviceTemplateKey`.

## Использование

**ServiceTemplate** - модель, содержащая информацию о представлении действий контроллера: `layout_id` и `template_id`.

Пример такой модели:

```
name: Test service template  # Название шаблона, используется для визуальной идентификации в админке
key: test                    # Ключ шаблона, уникален, используется при привязке действий контроллеров
layout_id: 1
template_id: 4
```

Для использования в своём сервисном контроллере используем `SuperAction` и конкретно универсальный экшен `ServiceMonsterAction`.

```php

public function actions()
{
    return [
        'no-entity-test' => [
            'class' => SuperAction::class,
            'actions' => [
                [
                    'class' => ServiceMonsterAction::class,
                    'serviceTemplateKey' => 'test',
                ],
            ],
        ],
    ];
}

```

Таким образом, будет рендерится тот шаблон и layout, которые указаны в сервисном шаблоне с ключем `test`.

## Реализации собственной логики контроллера

1. Добавьте своё действие на основе `UniversalAction` перед вызовом `ServiceMonsterAction`.
2. Сущности, используемые в монстро-шаблонах могут поступать также и из `FillEntities`.
3. Для изменения ключа сервисного шаблона в качестве `serviceTemplateKey` можно также передать анонимную функцию, которая будет возвращать ключ: 
```php
function(\DotPlant\Monster\Universal\ServiceMonsterAction &$this, \DevGroup\Frontend\Universal\ActionData &$actionData) {
    return $actionData->['entities']['page']->templateKey;
};
```
