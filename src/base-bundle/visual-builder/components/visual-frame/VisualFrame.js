import FrameApi from './FrameApi';
import uniqueId from './../uniqid';
import DataProviderFactory from './DataProviderFactory';

class VisualFrame
{
  constructor() {
    this.params();
    this.initialize();
  }

  initialize() {
    FrameApi.bindMessageListener(this);
    this.pageStructureJson = null;
    this.parentWindow = window.parent;
    /** @var FrontendMonster */
    this.parentMonster = this.parentWindow.FrontendMonster;
    this.parentBuilder = this.parentMonster.builder;
    this.currentMonsterContent = false;
    this.makeItMove();
    $(window).resize(() => {
      this.updateHandlers();
      return true;
    });
    $(() => {
      this.parentBuilder.pageChanged();
      this.parentBuilder.editable.initializeEditables(window);
    });
    this.MonsterEditData = window.MONSTER_EDIT_MODE_DATA;
    this.initProviders();
  }

  initProviders() {
    this.providers = {
      layout: this.getProviders(this.MonsterEditData.layout),
      template: this.getProviders(this.MonsterEditData.template),
      entity: this.getProviders(this.MonsterEditData.entity),
    };
    debugger;
  }

  getProviders(arr) {
    const result = {};
    Object.keys(arr.providers).forEach(key => {
      const providerDecl = arr.providers[key];
      result[key] = DataProviderFactory.factory(
        providerDecl,
        arr.providedKeys[key] || {}
      );
    });
    return result;
  }

  get $monsterContent() {
    if (this.$monsterContentCache) {
      return this.$monsterContentCache;
    }
    this.refreshMonsterContentCache();
    return this.$monsterContentCache;
  }

  refreshMonsterContentCache() {
    this.$monsterContentCache = {};
    const that = this;
    $(this.settings['monster-content-selector']).each(function iter() {
      if (!that.currentMonsterContent) {
        that.currentMonsterContent = $(this).data('uniqueContentId');
      }
      that.$monsterContentCache[$(this).data('uniqueContentId')] = $(this);
    });
  }

  updateHandlers() {
    if (this.$selectedMaterial && this.$handlers) {
      this.$handlers.css(
        'top',
        this.$selectedMaterial.position().top
          + this.$selectedMaterial.height()
          - this.$handlers.height()
      );
      this.$selectedMaterial.addClass('m-monster-content__material--active');
    }
  }

  makeItMove() {
    this.$handlers = $(`
<div class="monster-block-handlers">
  <a href="#" class="monster-block-handlers__configure">
    <i class="fa fa-cog"></i>
  </a>
  <span class="monster-block-handlers__block-name">Block name here</span>
  <a href="#" class="monster-block-handlers__move-up">
    <i class="fa fa-angle-up"></i>
  </a>
  <a href="#" class="monster-block-handlers__move-down">
    <i class="fa fa-angle-down"></i>
  </a>
  <a href="#" class="monster-block-handlers__clone">
    <i class="fa fa-clone"></i>
  </a>
  <a href="#" class="monster-block-handlers__remove">
    <i class="fa fa-times"></i>
  </a>
</div>`);
    $('body').append(this.$handlers);
    this.$handlers.hide();
    const that = this;
    $(this.settings['monster-content-selector']).on({
      mouseenter: function hoverIn() {
        const $this = $(this);
        $this.addClass('m-monster-content__material--highlighted');
      },
      mouseleave: function hoverOut() {
        const $this = $(this);
        $this.removeClass('m-monster-content__material--highlighted');
      },
      click: function clickHandler() {
        const $this = $(this);
        that.selectMaterial($this);
      },
    }, '[data-is-material]');
    that.$handlers
      .on('click', '.monster-block-handlers__move-up', () => {
        if (that.$selectedMaterial) {
          const $prev = that.$selectedMaterial.prev('[data-is-material]');
          if ($prev.length === 1) {
            that.$selectedMaterial.insertBefore($prev);
            that.updateHandlers();
            that.parentBuilder.pageChanged();
          }
        }
        return false;
      })
      .on('click', '.monster-block-handlers__move-down', () => {
        if (that.$selectedMaterial) {
          const $next = that.$selectedMaterial.next('[data-is-material]');
          if ($next.length === 1) {
            that.$selectedMaterial.insertAfter($next);
            that.updateHandlers();
            that.parentBuilder.pageChanged();
          }
        }
        return false;
      })
      .on('click', '.monster-block-handlers__clone', () => {
        if (that.$selectedMaterial) {
          const $clonedMaterial = that.$selectedMaterial.clone();
          const randomIndex = uniqueId('mat');
          $clonedMaterial
            .insertAfter(that.$selectedMaterial)
            .data(
              'materialIndex',
              randomIndex
            )
            .attr('data-material-index', randomIndex);
          that.selectMaterial($clonedMaterial);
          that.parentBuilder.pageChanged();
        }
        return false;
      })
      .on('click', '.monster-block-handlers__remove', () => {
        if (that.$selectedMaterial) {
          if (confirm('Are you sure you want to remove this material?')) {
            that.$selectedMaterial.remove();
            that.$selectedMaterial = null;
            that.$handlers.hide(); // it does not work. why? Need to fix!
            that.parentBuilder.pageChanged();
          }
        }
        return false;
      });
  }

  selectMaterial($material) {
    if (this.$selectedMaterial === $material) {
      return;
    }
    if (this.$selectedMaterial) {
      this.$selectedMaterial.removeClass('m-monster-content__material--active');
    }
    this.$selectedMaterial = $material;
    this.updateHandlers();
    this.$handlers.show();
  }

  serializeContent(callback) {
    const result = {};
    const that = this;
    Object.keys(this.$monsterContent).forEach(uniqueContentId => {
      const $monster = this.$monsterContent[uniqueContentId];
      result[$monster.data('uniqueContentId')] = that.serializeUniqueContent($monster);
    });
    this.sendToBuilder(callback, [result]);
  }

  serializeUniqueContent($monsterContent) {
    const result = {};
    result.uniqueContentId = $monsterContent.data('uniqueContentId');
    result.materials = {};
    $monsterContent.find('[data-is-material=\'1\']').each(function iter() {
      const material = {};
      material.block = $(this).data('materialBlock');
      result.materials[$(this).data('materialIndex')] = material;
    });
    return result;
  }

  /**
   * Sets VisualFrame settings.
   * Uses VisualFrameSettings variable if provided or default values instead.
   */
  params() {
    const userSettings = window.VisualFrameSettings || {};
    const settings = {
      'monster-content-selector': '.m-monster-content__content',
    };
    Object.keys(userSettings).forEach(key => {
      settings[key] = userSettings[key];
    });
    this.settings = settings;
  }

  sendToBuilder(func, args) {
    FrameApi.sendMessage(this.parentWindow, func, args);
  }

  static formSubmit(data) {
    const $form = $('<form method="POST"></form>');
    const $input = $('<input type="hidden" name="__json">');
    const $csrf = $('<input type="hidden">');

    $csrf
      .attr('name', $('meta[name=csrf-param]').attr('content'))
      .val($('meta[name=csrf-token]').attr('content'))
      .appendTo($form);

    $input
      .val(JSON.stringify(data))
      .appendTo($form);

    $form[0].submit();
  }

  constructTemplateData() {
    return {
      providersEntities: this.parentBuilder.serialize(),
      regionsMaterials: this.parentBuilder
        .environments.get('page-structure').materialsByRegions(),
    };
  }

  newBlock(materialName, regionName) {
    // @todo Add loader here as we are using form post !
    const randomIndex = uniqueId('mat');
    const newData = {
      template: this.constructTemplateData(),
      action: 'preview',
    };
    if (newData.template.regionsMaterials.hasOwnProperty(regionName) === false) {
      newData.template.regionsMaterials[regionName] = {};
    }
    // we are modifying template data by adding new material into needed region
    newData.template.regionsMaterials[regionName].decl[randomIndex] = {
      material: materialName,
    };
    newData.template.regionsMaterials[regionName].materialsOrder.push(randomIndex);
    VisualFrame.formSubmit(newData);

    return false;
  }

  save() {
    const data = VisualFrame.iterateTemplateType(this.pageStructureJson);
    debugger;
    VisualFrame.formSubmit(data);
    return false;
  }

  static iterateTemplateType(arr) {
    const result = {};
    arr.forEach(obj => {
      const key = obj.data.id;
      // layout or template
      result[key] = {
        templateRegions: VisualFrame.iterateTemplateRegions(obj.children),
      };
    });
    return result;
  }

  static iterateTemplateRegions(arr) {
    const result = {};
    arr.forEach(obj => {
      const key = obj.data.id.replace(/^.*\./, '');
      // this is an exact template region
      result[key] = {
        regionId: obj.data.regionId,
        regionKey: obj.data.regionKey,
        uniqueContentId: obj.data.uniqueContentId,
        materials: VisualFrame.iterateMaterials(obj.children),
      };
      if (typeof(obj.data.entityDependent) !== 'undefined') {
        result[key].entityDependent = obj.data.entityDependent;
      }
    });
    return result;
  }

  static iterateMaterials(arr) {
    const result = {};
    arr.forEach(obj => {
      const key = obj.data.materialIndex;
      result[key] = {
        // editablesKeys: obj.data.editableKeys,
        material: obj.data.materialPath,
      };
    });
    return result;
  }
}

export default VisualFrame;
