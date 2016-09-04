import BaseEnvironment from './../BaseEnvironment';

class MaterialsEnvironment extends BaseEnvironment {
  constructor(visualBuilder, name) {
    super(visualBuilder, name);
    this.initMaterialsSelector();
  }

  initMaterialsSelector() {
    this.$materialsGroups = $('<ul class="materials-groups"></ul>');
    this.$materialsList = [];

    this.visualBuilder.settings.bundles.forEach(bundle => {
      /* global polyglot: false */
      const i18nBundleName = typeof(polyglot) !== 'undefined'
        ? polyglot.t(bundle.name)
        : bundle.name;

      const $bundleTitle = `
      <li class="materials-groups__item materials-groups__item--bundle-label">
        <a href="#" class="materials-groups__switch-bundle" data-bundle-path="${bundle.fullPath}">
            ${i18nBundleName}
        </a>
      </li>
      `;
      this.$materialsList.push($bundleTitle);

      bundle.groups.forEach(group => {
        const groupName = group.name;
        const materials = group.materials;
        const i18nGroupName = typeof(polyglot) !== 'undefined' ? polyglot.t(groupName) : groupName;
        const $li = $(`
    <li class="materials-groups__item">
      <a href="#" data-group-path="${group.fullPath}" class="materials-groups__switch-group">
        ${i18nGroupName} <span class="materials-groups__count">(${materials.length})</span>
      </a>
    </li>`);
        this.$materialsGroups.append($li);
        const $list = $(`<ul class="materials-list" data-group-path="${group.fullPath}"></ul>`);
        const items = [];

        materials.forEach(material => {
          const materialName = material.name;
          const i18nMaterialName = typeof(polyglot) !== 'undefined'
            ? polyglot.t(materialName)
            : materialName;
          const $item = $(`
<li>
  <a href="#" class="materials-list__item" data-material-path="${material.fullPath}">
    ${i18nMaterialName}
  </a>
</li>
`);
          items.push($item);
        });
        $list.append(items);
        this.$materialsList.push($list);
      });
    });

    const that = this;
    /* global document: false */
    $(document).on('click', '.materials-groups__switch-group', function clickHandler() {
      const $this = $(this);
      $this.toggleMod('active');
      const groupPath = $this.data('groupPath');
      if ($this.mod('active')) {
        $('.materials-groups__switch-group').mod('active', false);

        $('.materials-list').each(function it() {
          const $list = $(this);
          if ($list.mod('active')) {
            $list.mod('active', false);
          }
          if ($list.data('groupPath') === groupPath) {
            $list.mod('active', true);
          }
        });

        $this.mod('active', true);
        that.$materialsPane.show();
      } else {
        // that's just second click on the same group
        that.$materialsPane.hide();
      }
      return false;
    });


    $(document).on('click', '.materials-list__item', function clickHandler() {
      const PageStructureEnv = that.visualBuilder.environments.get('page-structure');

      const selectedRegionKey = PageStructureEnv.selectedRegionKey;
      const selectedEntity = PageStructureEnv.selectedEntity;

      if (selectedRegionKey !== null && selectedEntity !== null) {
        that.sendMessage(
          'newBlock',
          [
            $(this).data('materialPath'),
            selectedEntity,
            selectedRegionKey,
          ]
        );
      }
    });
  }

  activate() {
    super.activate();

    this.$groupsPane = this.visualBuilder.createStackablePane();
    this.$groupsPane.append(this.$materialsGroups);

    this.$materialsPane = this.visualBuilder.createStackablePane();
    this.$materialsPane.append(this.$materialsList);
    this.$materialsPane.hide();

    /*
    const PageStructureEnv = that.visualBuilder.environments.get('page-structure');

    const selectedRegionKey = PageStructureEnv.selectedRegionKey;
    const selectedEntity = PageStructureEnv.selectedEntity;

    @todo check for selectedRegion if not - we must not add block here
    */

    $('.materials-groups__switch-group').mod('active', false);
  }
}
export default MaterialsEnvironment;
