import BaseEnvironment from './../BaseEnvironment';
import Region from './../PageStructureComponents/Region';

class PageStructureEnvironment extends BaseEnvironment {
  constructor(visualBuilder, name) {
    super(visualBuilder, name);
    this.initPageStructureElement();
    this.editModeData = {};
  }

  initPageStructureElement() {
    this.$pageStructure = $('<ul class="page-structure"></ul>');
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
    regions.each(function iter() {
      const $regionNode = that.target.$(this);
      const regionObject = new Region($regionNode, that.target.$);
      const $regionLi = regionObject.processRegion();
      that.regionsStructure[regionObject.key] = regionObject;
      environment.$pageStructure.append($regionLi);
    });
    this.editModeData = this.target.MONSTER_EDIT_MODE_DATA;
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
