class DataProvider {
  constructor(className, providedKeys) {
    this.className = className;
    this.providedKeys = providedKeys;
    this.associations = {};
    this.associate();
  }

  /**
   *
   * @returns {Editable}
   */
  static get editable() {
    return window.FrontendMonster.VisualFrame.editable;
  }

  associate() {
    this.associations = {};
    Object.keys(this.providedKeys).forEach(regionKey => {
      const region = this.providedKeys[regionKey];
      const $region = $(`[data-region-key="${regionKey}"]`).first();
      // console.log(`%cRegion: ${regionKey}`, 'color: red; font-weight: bold; background: #333');
      // console.log(region);
      const materials = {};
      Object.keys(region).forEach(materialKey => {
        const dataKeys = region[materialKey];
        const $material = $region.find(`[data-material-index="${materialKey}"]`).first();
        // console.log(`%cMaterial: ${materialKey}`, 'color: #fff; font-weight: bold; background: #69f');
        // console.log($material);
        if ($material.length === 0) {
          return;
        }
        materials[materialKey] = {
          dataKeys,
          $material,
        };
        const materialEditableKeys = $material.data('editableKeys');
        this.initializeMaterialEdit(materialEditableKeys, $material, dataKeys);

      });
      this.associations[regionKey] = {
        $region,
        materials,
      };
    });
  }

  initializeMaterialEdit(materialEditableKeys, $root, dataKeys, prefix = '') {
    dataKeys.forEach(key => {
      const obj = materialEditableKeys[key] || 'NO_SUCH_KEY';
      if (obj === 'NO_SUCH_KEY') {
        return;
      }
      if (obj === Object(obj)) {
        // it's recursive
        // first - find all blocks
        const $blocks = $root.find(`[data-recursive-item="${key}"]`);
        const that = this;
        let counter = 0;
        $blocks.each(function iter() {
          const $this = $(this);
          // console.log(`%c Recursive item ${key} #${counter}`, 'background: #222; color: #bada55');
          // console.log(this);
          that.initializeMaterialEdit(obj, $this, Object.keys(obj), 'item.');
          counter++;
        });
      } else {
        // it's plain field
        const $node = $root.find(`[data-editable-key="${prefix}${key}"]`).first();
        if ($node.length === 0) {
          return;
        }
        DataProvider.editable.initializeEditable($node);
        // console.log(`%c Plain field editable ${prefix}${key}`, 'background: #222; color: #bada55');
        // console.log($node[0].outerHTML);
      }
    });
  }


  serializeKeys() {
    const result = {};
    Object.keys(this.associations).forEach(regionKey => {
      const region = this.associations[regionKey];
      const $region = region.$region;
      result[regionKey] = {};
      Object.keys(region.materials).forEach(materialKey => {
        const dataKeys = region.materials[materialKey].dataKeys;
        const $material = region.materials[materialKey].$material;
        result[regionKey][materialKey] = this.serializeMaterial(
          regionKey,
          materialKey,
          dataKeys,
          $region,
          $material
        );
      });
    });
    return result;
  }

  serialize() {
    const data = {
      class: this.className,
    };
    return this.fillConfig(data);
  }

  fillConfig(data) {
    return data;
  }

  serializeMaterial(regionKey, materialKey, dataKeys, $region, $material) {
    return null;
  }
}

export default DataProvider;
