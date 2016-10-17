import BaseEnvironment from './../BaseEnvironment';
import MaterialControls from './../PageStructure/MaterialControls';
import PageIterator from './../PageStructure/PageIterator';

class PageStructureEnvironment extends BaseEnvironment {
  constructor(visualBuilder, name) {
    super(visualBuilder, name);
    this.initPageStructureElement();
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
      const result = PageIterator.processLayout($(this));
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
        check_callback: (operation, node, node_parent/*, node_position, more*/) => {
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
        this.updatePageStructureJson();
        this.target.FrontendMonster.VisualFrame.preview();
        return true;
      });

    this.controlButtons = {
      material: new MaterialControls(this),
    };
    console.log(this.controlButtons);

    this.$pageStructure.on('select_node.jstree', (e, obj) => {

      const type = obj.node.type;
      this.selectedEntity = obj.node.data.entityType || null;
      switch (type) {
        case 'material':
          const $anchor = $(`#${obj.node.id}`);
          $anchor.prepend(this.controlButtons[type].controlButtons);
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





}
export default PageStructureEnvironment;
