import SiteStructureEnvironment from './environments/SiteStructureEnvironment';
import MaterialsEnvironment from './environments/MaterialsEnvironment';
import CustomizationEnvironment from './environments/CustomizationEnvironment';
import ActionEnvironment from './environments/ActionEnvironment';
import PageStructureEnvironment from './environments/PageStructureEnvironment';
import FrameApi from './../visual-frame/FrameApi';
// import Editable from './Editable';

class VisualBuilder {
  constructor() {
    this.params();
    this.resolutionSwitcher();

    this.environments = new Map([
      ['site-structure', new SiteStructureEnvironment(this, 'site-structure')],
      ['page-structure', new PageStructureEnvironment(this, 'page-structure')],
      ['materials', new MaterialsEnvironment(this, 'materials')],
      ['customization', new CustomizationEnvironment(this, 'customization')],
      ['action', new ActionEnvironment(this, 'action')],
    ]);

    this.environmentSelector();

    // select first environment by default
    this.switchEnvironment('site-structure');
    $('.monster-environment-selector__environment-link')
      .first()
      .mod('active', true);
    FrameApi.bindMessageListener(this);

    // this.editable = new Editable();

    this.controls();
  }

  /**
   * Sets VisualBuilder settings.
   * Uses VisualBuilderSettings variable if provided or default values instead.
   */
  params() {
    const userSettings = window.VisualBuilderSettings || {};
    const settings = {
      'element-selector': '.monster-visual-builder',
      'frame-selector': '.monster-visual-frame',
      bundles: {},
      'stackable-container-class': 'monster-stackable-container',
      'new-block-url': '/monster/visual-builder/new-block',
    };
    Object.keys(userSettings).forEach(key => {
      settings[key] = userSettings[key];
    });
    this.settings = settings;
    this.$builder = $(this.settings['element-selector']);
    this.$stackable = $(`.${this.settings['stackable-container-class']}`);
  }

  resolutionSwitcher() {
    const that = this;
    const bemElem = 'resolution-switcher__resolution-link';

    const $resolutionLinks = $(`.${bemElem}`);
    $resolutionLinks.click(function callback() {
      $resolutionLinks.mod('active', false);
      $(that.settings['frame-selector']).width($(this).data('resolutionWidth'));
      $(this).mod('active', true);
      return false;
    });
  }

  environmentSelector() {
    const that = this;
    const bemElem = 'monster-environment-selector__environment-link';

    const $sectionLinks = $(`.${bemElem}`);
    $sectionLinks.click(function callback() {
      const environmentName = $(this).data('environmentName');
      if (that.currentEnvironment === environmentName) {
        $sectionLinks.mod('active', false);
        that.environments.get(environmentName).deactivate();
        that.currentEnvironment = null;
        return false;
      }

      $sectionLinks.mod('active', false);
      that.switchEnvironment(environmentName);
      $(this).mod('active', true);
      return false;
    });
  }

  switchEnvironment(environmentName) {
    this.environments.get(environmentName).activate();
    this.currentEnvironment = environmentName;
  }

  clearStackable() {
    this.$stackable.empty();
  }

  createStackablePane() {
    const paneClass = `${this.settings['stackable-container-class']}__pane`;
    const modifier = this.$stackable.find(`.${paneClass}`).length === 0
      ? `${paneClass}_first`
      : '';
    const $newPane = $(`<div class="${paneClass} ${modifier}"></div>`);
    this.$stackable.append($newPane);
    return $newPane;
  }

  materialByName(name) {
    if (this.settings.materials.hasOwnProperty(name)) {
      return this.settings.materials[name];
    }
    return null;
  }

  get frameContentWindow() {
    return $(this.settings['frame-selector'])[0].contentWindow;
  }

  serialize() {
    // FrameApi.sendMessage(this.frameContentWindow, 'serializeContent', ['log']);
    const result = this.environments.get('page-structure').serializePage();
    console.log(result);

    // we have result which is content in format:
    // region
    // --- material id
    // ------- keys => values
    //
    // our Providers should get only those keys that they provide
    // provided keys are stored in frameContentWindow.MONSTER_EDIT_MODE_DATA.template.providedKeys
    const resultByProviders = {};
    const providedKeys = this.frameContentWindow.MONSTER_EDIT_MODE_DATA.template.providedKeys;

    Object.keys(providedKeys).forEach(providerIndex => {
      resultByProviders[providerIndex] = {};

      const regions = providedKeys[providerIndex];

      Object.keys(regions).forEach(regionKey => {
        if (result.hasOwnProperty(regionKey) === false) {
          return;
        }
        resultByProviders[providerIndex][regionKey] = {};

        // go deep to material indeces
        const materials = regions[regionKey];

        Object.keys(materials).forEach(materialIndex => {
          if (result[regionKey].hasOwnProperty(materialIndex) === false) {
            return;
          }
          resultByProviders[providerIndex][regionKey][materialIndex] = {};

          const dataKeys = materials[materialIndex];

          dataKeys.forEach(key => {
            if (result[regionKey][materialIndex].hasOwnProperty(key) === false) {
              return;
            }
            resultByProviders
              [providerIndex]
              [regionKey]
              [materialIndex]
              [key] = result[regionKey][materialIndex][key];
          });
        });
      });
    });
    console.log(resultByProviders);
    return resultByProviders;
  }

  pageChanged() {
    this.environments.forEach(
      environment =>
        environment.pageChanged()
    );
  }

  log(result) {
    console.log(result);
  }

  controls() {
    this.$controls = this.$builder.find('.controls_left').first();
    this.$controls.elem('refresh').click(() => {
      this.frameContentWindow.location.reload();
      return false;
    });

    this.$controls.elem('save').click(() => {
      FrameApi.sendMessage(this.frameContentWindow, 'save');
      return false;
    });
    this.$controlsRight = this.$builder.find('.controls_right').first();
    this.$controlsRight.elem('clear-cache').click(() => {
      /* global window: false */
      /* eslint-disable no-param-reassign, no-unused-vars */
      window.DialogHelper
        .builderDialog()
        .onAjaxLoad((data, $target, dialog, dataChanger) => {
          dataChanger(data ? '<div>OK</div>' : '<div>Error</div>');
          return true;
        })
        .ajax({
          url: '/monster/bundles/clear-cache',
          method: 'POST',
          dataType: 'json',
        })
        .autoDestroy()
        .show();
      /* eslint-enable no-param-reassign, no-unused-vars */
      return false;
    });
    this.$controlsRight.elem('debug-serialize').click(() => {
      /* global window: false */
      /* eslint-disable no-param-reassign, no-unused-vars */

      const serializedData = FrameApi.sendMessage(
        this.frameContentWindow,
        'serializeDebug'
      );
      console.log(serializedData);


      /* eslint-enable no-param-reassign, no-unused-vars */
      return false;
    });
  }
}

export default VisualBuilder;
