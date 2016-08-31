import DataProvider from '../DataProvider';

class StaticContent extends DataProvider {
  constructor(providedKeys) {
    super('DotPlant\\Monster\\DataEntity\\StaticContentProvider', providedKeys);
  }

  fillConfig(data) {
    const newData = data;
    newData.entities = this.serializeKeys();
    return newData;
  }

  serializeMaterial(regionKey, materialKey, dataKeys, $region, $material) {
    const materialEditableKeys = $material.data('editableKeys');
    const result = this.recursiveSerialize(materialEditableKeys, $material, dataKeys);
    return result;
  }

  recursiveSerialize(materialEditableKeys, $root, dataKeys, prefix = '') {
    const result = {};

    dataKeys.forEach(key => {
      const obj = materialEditableKeys[key] || 'NO_SUCH_KEY';
      if (obj === 'NO_SUCH_KEY') {
        debugger;
        return;
      }
      if (obj === Object(obj)) {
        // it's recursive
        // first - find all blocks
        const $blocks = $root.find(`[data-recursive-item="${key}"]`);
        const that = this;
        let counter = 0;
        result[key] = [];
        $blocks.each(function iter() {
          const $this = $(this);
          result[key].push(that.recursiveSerialize(obj, $this, Object.keys(obj), 'item.'));
          counter++;
        });
      } else {
        // it's plain field
        const $node = $root.find(`[data-editable-key="${prefix}${key}"]`).first();
        if ($node.length === 0) {
          console.warn(`Skipped [data-editable-key="${prefix}${key}"] as not found`);
          return;
        }
        result[key] = DataProvider.editable.serializeEditable($node);
      }
    });
    return result;
  }
}

export default StaticContent;
