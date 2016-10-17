class PageIterator {

  static processLayout($layoutRegion) {
    const item = PageIterator.extractRegionData($layoutRegion);
    item.state = {
      opened: true,
    };
    item.children = [];
    item.data.id = `layout.templateRegion.${item.data.regionKey}`;
    item.id = `psj_${item.data.id}`.replace(/\./g, '_');
    item.data.entityType = 'layout';
    const templateRegions = [];

    // find materials
    const $layoutMaterials = $layoutRegion.find('>[data-is-material]');
    $layoutMaterials.each(function iter() {
      const $layoutMaterial = $(this);
      const result = PageIterator.processLayoutMaterial($layoutMaterial, item.id, item.data.regionKey);
      const layoutMaterialItem = result.layoutMaterial;
      result.templateRegions.forEach(region => {
        templateRegions.push(region);
      });
      item.children.push(layoutMaterialItem);
    });

    return {
      item,
      templateRegions,
    };
  }

  static processLayoutMaterial($layoutMaterial, prefix, regionKey) {
    const materialIndex = $layoutMaterial.data('materialIndex');
    const materialPath = $layoutMaterial.data('materialPath');
    const item = {
      text: `${
        materialPath === 'core.frontend-monster-core.general.content-placeholder'
          ? 'Main Entity Content'
          : `Material: ${materialIndex}`}
      `,
      type: 'material',
      data: {
        id: `${prefix}.${materialIndex}`,
        materialIndex,
        materialPath,
        editableKeys: $layoutMaterial.data('editableKeys'),
        node: $layoutMaterial,
        regionKey,
        entityType: 'layout',
      },
      id: `psj_${prefix}_${materialIndex}`,
    };
    const templateRegions = [];
    const $regions = $layoutMaterial.find('> .m-monster-content__content');
    $regions.each(function iter() {
      const result = PageIterator.processTemplateRegion($(this));
      templateRegions.push(result);
    });
    if (templateRegions.length > 0) {
      item.data.isContent = true;
    }
    return {
      layoutMaterial: item,
      templateRegions,
    };
  }

  static processTemplateRegion($templateRegion) {
    const item = PageIterator.extractRegionData($templateRegion);
    item.state = {
      opened: true,
    };
    item.children = [];
    item.data.entityDependent = $templateRegion.data('regionEntityDependent') === 1;

    const prefix = item.data.entityDependent ? 'content' : 'template';
    item.data.entityType = item.data.entityDependent ? 'entity' : 'template';
    item.data.id = `${prefix}.templateRegion.${item.data.regionKey}`;
    item.id = `psj_${item.data.id}`.replace(/\./g, '_');

    if (item.data.entityDependent) {
      item.type = 'contentTemplateRegion';
    }
    const $regionMaterials = $templateRegion.find('>[data-is-material]');
    $regionMaterials.each(function iter() {
      const material = PageIterator.processTemplateRegionMaterial(
        $(this),
        item.data.id,
        prefix
      );
      material.data.regionKey = item.data.regionKey;
      material.id = `psj_${material.data.id}`.replace(/\./g, '_');
      item.children.push(material);
    });
    return item;
  }

  static processTemplateRegionMaterial($regionMaterial, prefix, entityType) {
    const materialIndex = $regionMaterial.data('materialIndex');
    const materialPath = $regionMaterial.data('materialPath');
    return {
      text: `Material: ${materialIndex}`,
      type: 'material',
      data: {
        id: `${prefix}.${materialIndex}`,
        materialIndex,
        materialPath,
        editableKeys: $regionMaterial.data('editableKeys'),
        node: $regionMaterial,
        entityType,
      },
    };
  }

  static extractRegionData($node) {
    return {
      text: $node.data('contentDescription'),
      type: 'templateRegion',
      data: {
        regionId: $node.data('regionId'),
        regionKey: $node.data('regionKey'),
        uniqueContentId: $node.data('uniqueContentId'),
        node: $node,
      },
    };
  }
}

export default PageIterator;