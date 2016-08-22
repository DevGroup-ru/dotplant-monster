import BaseEnvironment from './../BaseEnvironment';
import Region from './../PageStructureComponents/Region';

class PageStructureEnvironment extends BaseEnvironment {
  constructor(visualBuilder, name) {
    super(visualBuilder, name);
    this.initPageStructureElement();
    this.editModeData = {};
  }

  initPageStructureElement() {
    this.$pageStructure = $('<div class="page-structure"></div>');
  }

  activate() {
    super.activate();

    this.$structurePane = this.visualBuilder.createStackablePane();
    this.$structurePane.append(this.$pageStructure);
  }

  pageChanged() {
    super.pageChanged();
    this.$pageStructure.jstree('destroy');
    const environment = this;
    const layout = this.target.MONSTER_EDIT_MODE_DATA.layout;
    const template = this.target.MONSTER_EDIT_MODE_DATA.template;

    const layoutItem = {
      text: `Layout - ${layout.key} #${layout.id}`,
      icon: 'fa fa-columns',
      state: {
        opened: true,
      },
      children: [],
    };
    const templateItem = {
      text: `Template - ${template.key} #${template.id}`,
      icon: 'fa fa-th',
      state: {
        opened: true,
      },
      children: [],
    };

    const $layoutRegions = this.target$('.m-monster-content__layout');
    $layoutRegions.each(function iter() {
      const result = PageStructureEnvironment.processLayout($(this));
      layoutItem.children.push(result.item);
      result.templateRegions.forEach(region => {
        templateItem.children.push(region);
      });
    });

    this.pageStructure = [
      layoutItem,
      templateItem,
    ];
    this.$pageStructure.jstree({
      core: {
        data: this.pageStructure,
      },
    });

    // regions.each(function iter() {
    //   const $regionNode = that.target.$(this);
    //   const regionObject = new Region($regionNode, that.target.$);
    //   const $regionLi = regionObject.processRegion();
    //   that.regionsStructure[regionObject.key] = regionObject;
    //   environment.$pageStructure.append($regionLi);
    // });
    this.editModeData = this.target.MONSTER_EDIT_MODE_DATA;
  }

  static processLayout($layoutRegion) {
    const item = PageStructureEnvironment.extractRegionData($layoutRegion);
    item.state = {
      opened: true,
    };
    item.children = [];
    item.id = `layout.${item.regionKey}`;
    const templateRegions = [];

    // find materials
    const $layoutMaterials = $layoutRegion.find('>[data-is-material]');
    $layoutMaterials.each(function iter() {
      const $layoutMaterial = $(this);
      const result = PageStructureEnvironment.processLayoutMaterial($layoutMaterial);
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

  static processLayoutMaterial($layoutMaterial) {
    const materialIndex = $layoutMaterial.data('materialIndex');
    const materialPath = $layoutMaterial.data('materialPath');
    const item = {
      text: `${
        materialPath === 'core.frontend-monster-core.general.content-placeholder'
          ? 'Main Entity Content'
          : `Material: ${materialIndex}`}
      `,
      icon: 'fa fa-puzzle-piece',
      materialIndex,
      materialPath,
      editableKeys: $layoutMaterial.data('editableKeys'),
    };
    const templateRegions = [];
    const $regions = $layoutMaterial.find('> .m-monster-content__content');
    $regions.each(function iter() {
      const result = PageStructureEnvironment.processTemplateRegion($(this));
      templateRegions.push(result);
    });
    if (templateRegions.length > 0) {
      item.isContent = true;
    }
    return {
      layoutMaterial: item,
      templateRegions,
    };
  }

  static processTemplateRegion($templateRegion) {
    const item = PageStructureEnvironment.extractRegionData($templateRegion);
    item.state = {
      opened: true,
    };
    item.children = [];
    const $regionMaterials = $templateRegion.find('>[data-is-material]');
    $regionMaterials.each(function iter() {
      item.children.push(PageStructureEnvironment.processTemplateRegionMaterial($(this)));
    });
    return item;
  }

  static processTemplateRegionMaterial($regionMaterial) {
    const materialIndex = $regionMaterial.data('materialIndex');
    const materialPath = $regionMaterial.data('materialPath');
    return {
      text: `Material: ${materialIndex}`,
      materialIndex,
      materialPath,
      icon: 'fa fa-puzzle-piece',
      editableKeys: $regionMaterial.data('editableKeys'),
    };
  }

  static extractRegionData($node) {
    return {
      text: $node.data('contentDescription'),
      icon: 'fa fa-folder-o',
      regionId: $node.data('regionId'),
      regionKey: $node.data('regionKey'),
      uniqueContentId: $node.data('uniqueContentId'),
      node: $node,
    };
  }

  serializePage() {
    const result = {};
    Object.keys(this.regionsStructure).forEach(regionKey => {
      const region = this.regionsStructure[regionKey];
      result[region.key] = region.serialize();
    });
    return result;
  }

  materialsByRegions() {
    const result = {};
    Object.keys(this.regionsStructure).forEach(regionKey => {
      const region = this.regionsStructure[regionKey];
      result[region.key] = region.materialsDecl();
    });
    return result;
  }
}
export default PageStructureEnvironment;
