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
    const that = this;

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
        check_callback: (operation, node, node_parent, node_position, more) => {
          if (operation === 'move_node') {
            if (node.type === 'material') {
              return node_parent.type === 'templateRegion' || node_parent.type === 'contentTemplateRegion';
            } else if (node.type === 'templateRegion' || node.type === 'contentTemplateRegion') {
              return node_parent.type === 'default';
            }
            return false;
          }
          return true;
        },
        data: this.pageStructure,
        themes: {
          name: 'default-dark',
        },
      },
      plugins: [
        'types',
        'wholerow',
        'dnd',
      ],
      dnd: {
        open_timeout: 200,
        large_drop_target: true,
        large_drag_target: true,
        check_while_dragging: true,
        copy: false,
        is_draggable: function(nodes) {
          const node = nodes[0] || undefined;
          if (node === undefined) {
            return false;
          }
          return node.type === 'material'
            || node.type === 'contentTemplateRegion'
            || node.type === 'templateRegion';
        }
      },
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

    this.jstreeObj = this.$pageStructure.jstree();

    this.$pageStructure
      .on('loaded.jstree', () => {
        this.updatePageStructureJson();

        let isContentRegionFound = false;
        this.pageStructure[1].children.forEach((region) => {
          if (region.data.entityDependent && isContentRegionFound === false) {
            isContentRegionFound = true;
            this.jstreeObj.select_node(region.id);
          }
        });
      })

      .on('move_node.jstree', () => {
        console.log('move node');
        return false;
      });
    $(document)
      .on('dnd_stop.vakata.jstree', () => {
        console.log('dnd_stop.vakata.jstree')
        return false;
      })
      .on('dnd_stop', () => {
        console.log('dnd_stop');
        return false;
      })
      .on('dnd_stop.jstree', () => {
        console.log('asd');
      })
      .on('dnd_stop.vakata', () => {
        console.log('dnd_stop');
        this.updatePageStructureJson();
        this.target.FrontendMonster.VisualFrame.preview();
        return true;
      });
    const controlButtons = $('<div class="tree-control-buttons" role="presentation"></div>');

    const buttonsArray = [
      {
        icon: 'fa fa-arrow-right',
        name: 'Select',
        click: (jsTreeNode, $node) => {
          this.selectMaterial(jsTreeNode.data.materialIndex);
          return false;
        }
      },
      {
        icon: 'fa fa-trash-o',
        name: 'Remove',
        click: (jsTreeNode, $node) => {
          this.jstreeObj.delete_node(this.jstreeObj.get_selected());
          this.updatePageStructureJson();
          this.target.FrontendMonster.VisualFrame.preview();
          return false;
        }
      }
    ];

    buttonsArray.forEach(conf => {
      const $button = $(`<a href="#" class="tree-control-buttons__button" title="${conf.name}">
  <i class="${conf.icon}"></i>
</a>`);
      $button.click(function clickHandler(){
        const $node = $(this).parent().parent();

        return conf.click(that.jstreeObj.get_node($node), $node);
      });
      controlButtons.append($button);
    });

    this.$pageStructure.on('select_node.jstree', (e, obj) => {

      const type = obj.node.type;
      this.selectedEntity = obj.node.data.entityType || null;
      switch (type) {
        case 'material':
          const $anchor = $(`#${obj.node.id}`);
          $anchor.prepend(controlButtons);
          this.selectMaterial(obj.node.data.materialIndex);
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

  selectMaterial(index) {
    const $targetMaterial = this.target$(`[data-material-index="${index}"]`);
    $('.m-monster-material_selected').removeClass('m-monster-material_selected');
    this.target$.smoothScroll({
      scrollTarget: $targetMaterial,
    });
    // restart animation magic. see https://css-tricks.com/restart-css-animation/
    $targetMaterial
      .removeClass('m-monster-material_selected');

    void $targetMaterial[0].offsetWidth;

    $targetMaterial
      .addClass('m-monster-material_selected');
  }

  updatePageStructureJson() {
    this.pageStructureJson = this.jstreeObj.get_json(this.$pageStructure, {
      no_state: true,
      no_id: true,
      no_li_attr: true,
      no_a_attr: true,
    });
    this.target.FrontendMonster.VisualFrame.pageStructureJson = this.pageStructureJson;
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
