import BaseEnvironment from './../BaseEnvironment';

class PageStructureEnvironment extends BaseEnvironment {
  constructor(visualBuilder, name) {
    super(visualBuilder, name);
    this.initPageStructureElement();
    this.editModeData = {};
    this.selectedRegionKey = null;
    this.selectedEntity = null;
  }

  initPageStructureElement() {
    this.$header = $('<div class="monster-stackable-container__pane-header">Page structure</div>');
    this.$pageStructure = $('<div class="page-structure"></div>');
  }

  activate() {
    super.activate();

    this.$structurePane = this.visualBuilder.createStackablePane();
    this.$structurePane.append(this.$header);
    this.$structurePane.append(this.$pageStructure);
  }
  deactivate() {
    this.$pageStructure.detach();
    this.$header.detach();
    super.deactivate();
  }

  pageChanged() {
    super.pageChanged();
    this.$pageStructure.jstree('destroy');
    const layout = this.target.MONSTER_EDIT_MODE_DATA.layout;
    const template = this.target.MONSTER_EDIT_MODE_DATA.template;

    const layoutItem = {
      data: {
        id: 'layout',
        templateId: layout.id,
      },
      text: `Layout - ${layout.key} #${layout.id}`,
      icon: 'fa fa-columns',
      state: {
        opened: true,
      },
      children: [],
    };
    const templateItem = {
      data: {
        id: 'template',
        templateId: template.id,
      },
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
        themes: {
          name: 'default-dark',
        },
      },
      plugins: [
        'types',
        'wholerow',
      ],
      types: {
        layout: {
          icon: 'fa fa-columns',
        },
        template: {
          icon: 'fa fa-th',
        },
        templateRegion: {
          icon: 'fa fa-folder-o',
        },
        contentTemplateRegion: {
          icon: 'fa fa-folder',
        },
        material: {
          icon: 'fa fa-puzzle-piece',
        },
      },
    });

    const jstreeObj = this.$pageStructure.jstree();

    this.$pageStructure.on('loaded.jstree', () => {
      this.pageStructureJson = jstreeObj.get_json(this.$pageStructure, {
        no_state: true,
        no_id: true,
        no_li_attr: true,
        no_a_attr: true,
      });
      this.target.FrontendMonster.VisualFrame.pageStructureJson = this.pageStructureJson;
      let isContentRegionFound = false;
      this.pageStructure[1].children.forEach((region) => {
        if (region.data.entityDependent && isContentRegionFound === false) {
          isContentRegionFound = true;
          jstreeObj.select_node(region.id);
        }
      });
    });
    const controlButtons = $('<div class="tree-control-buttons" role="presentation"> EDIT and etc.</div>');
    this.$pageStructure.on('select_node.jstree', (e, obj) => {
      const $anchor = $(`#${obj.node.id}`);
      $anchor.prepend(controlButtons);
      const type = obj.node.type;
      this.selectedEntity = obj.node.data.entityType || null;
      switch (type) {
        case 'material':
          this.target$.smoothScroll({
            scrollTarget: this.target$(`[data-material-path="${obj.node.data.materialPath}"]`),
          });
          this.selectedRegionKey = obj.node.data.regionKey;
          break;
        case 'templateRegion':
        case 'contentTemplateRegion':
          this.target$.smoothScroll({
            scrollTarget: this.target$(`[data-region-key="${obj.node.data.regionKey}"]`),
          });
          this.selectedRegionKey = obj.node.data.regionKey;
          break;
        default:
          this.selectedRegionKey = null;
          break;
      }
    });


    this.editModeData = this.target.MONSTER_EDIT_MODE_DATA;
  }

  static processLayout($layoutRegion) {
    const item = PageStructureEnvironment.extractRegionData($layoutRegion);
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
      const result = PageStructureEnvironment.processLayoutMaterial($layoutMaterial, item.id, item.data.regionKey);
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
      const result = PageStructureEnvironment.processTemplateRegion($(this));
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
    const item = PageStructureEnvironment.extractRegionData($templateRegion);
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
      const material = PageStructureEnvironment.processTemplateRegionMaterial(
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
