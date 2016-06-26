import Material from './Material';

class Region {
  constructor($node) {
    this.materials = {};
    this.$node = $node;
    this.description = $node.data('contentDescription');
  }

  processRegion() {
    const $regionLi = $(`<li class="page-structure__region">${this.regionDescription}</li>`);
    this.key = this.$node.data('regionKey');
    this.id = this.$node.data('regionId');
    const $regionUl = $('<ul class="page-structure__region-materials"></ul>');

    const $materials = this.$node.find('[data-is-material=1]');
    const that = this;

    $materials.each(function materialsIterator() {
      const $materialNode = $(this);
      const materialObject = new Material($materialNode);
      const $li = materialObject.processMaterial();
      that.materials[materialObject.key] = materialObject;
      $regionUl.append($li);
    });

    $regionLi.append($regionUl);
    return $regionLi;
  }

  serialize() {
    const result = {};
    const materials = this.materials;
    Object.keys(materials).forEach(function iter(materialKey) {
      result[materialKey] = materials[materialKey].serialize();
    });
    return result;
  }

  materialsDecl() {
    const result = {};
    for (const materialKey in this.materials) {
      if (this.materials.hasOwnProperty(materialKey)) {
        result[materialKey] = {
          'material': this.materials[materialKey].materialPath,
        };
      }
    }
    return result;
  }
}

export default Region;
