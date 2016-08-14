import Material from './Material';

class Region {
  constructor($node, target$) {
    this.materials = {};
    this.$node = $node;
    this.description = $node.data('contentDescription');
    this.target$ = target$;
  }

  processRegion() {
    this.key = this.$node.data('regionKey');
    const description = this.regionDescription ? this.regionDescription : this.key;
    const $regionLi = $(`<li class="page-structure__region">${description}</li>`);

    this.id = this.$node.data('regionId');
    const $regionUl = $('<ul class="page-structure__region-materials"></ul>');

    const $materials = this.$node.find('[data-is-material=1]');
    const that = this;

    $materials.each(function materialsIterator() {
      const $materialNode = that.target$(this);
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
    // for (const materialKey in this.materials) {
    //   if (this.materials.hasOwnProperty(materialKey)) {
    //     result[materialKey] = {
    //       'material': this.materials[materialKey].materialPath,
    //     };
    //   }
    // }
    const $materials = this.$node.find('[data-is-material=1]');
    const materialsOrder = [];
    $materials.each(function materialsIterator() {
      const $this = $(this);
      const materialIndex = $this.data('materialIndex');
      materialsOrder.push(materialIndex);
      result[materialIndex] = {
        material: $this.data('materialPath'),
      };
    });
    return {
      decl: result,
      materialsOrder
    };
  }
}

export default Region;
