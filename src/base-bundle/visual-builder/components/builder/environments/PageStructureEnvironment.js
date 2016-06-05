import BaseEnvironment from './../BaseEnvironment';

class PageStructureEnvironment extends BaseEnvironment {
  constructor(visualBuilder, name) {
    super(visualBuilder, name);
    this.initPageStructureElement();
  }

  initPageStructureElement() {
    this.$pageStructure = $(`<ul class="page-structure"></ul>`)
  }

  activate() {
    super.activate();

    this.$structurePane = this.visualBuilder.createStackablePane();
    this.$structurePane.append(this.$pageStructure);
  }
  
  pageChanged() {
    super.pageChanged();
    this.$pageStructure.find('li').remove();
    const regions = this.target.$('.m-monster-content__content');
    const environment = this;
    regions.each(function(){
      const $region = $(this);
      const regionDescription = $region.data('contentDescription');
      const $regionLi = $(`<li class="page-structure__region">${regionDescription}</li>`);
      $regionLi.data('regionKey', $region.data('regionKey'));
      $regionLi.data('regionId', $region.data('regionId'));
      const $regionUl = $(`<ul class="page-structure__region-materials"></ul>`);

      const materials = $region.find('[data-is-material=1]');
      materials.each(function(){
        const $material = $(this);
        const name = $material.data('materialPath').replace(/.*\.(.*)$/, '$1');
        const $li = $(`<li class="page-structure__material">${name}</li>`);
        $regionUl.append($li);
      });

      $regionLi.append($regionUl);
      console.log($regionLi);
      environment.$pageStructure.append($regionLi);
    });

  }
}
export default PageStructureEnvironment;
