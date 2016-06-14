import BaseEnvironment from './../BaseEnvironment';
import Region from './../PageStructureComponents/Region';

class PageStructureEnvironment extends BaseEnvironment {
  constructor(visualBuilder, name) {
    super(visualBuilder, name);
    this.initPageStructureElement();
    this.editModeData = {};
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
    this.regionsStructure = {};
    const that = this;
    regions.each(function(){
      const $regionNode = $(this);
      const regionObject = new Region($regionNode);
      const $regionLi = regionObject.processRegion();
      that.regionsStructure[regionObject.key] = regionObject;
      environment.$pageStructure.append($regionLi);
    });
    this.editModeData = this.target.MONSTER_EDIT_MODE_DATA;
  }
  
  serializePage() {
    const result = {};
    for (const regionKey in this.regionsStructure) {
      if (this.regionsStructure.hasOwnProperty(regionKey)) {
        const region = this.regionsStructure[regionKey];
        result[region.key] = region.serialize();
      }
    }
    return result;
  }
}
export default PageStructureEnvironment;
