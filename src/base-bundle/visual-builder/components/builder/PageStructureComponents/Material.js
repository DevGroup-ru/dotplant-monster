class Material {
  constructor($node) {
    this.$node = $node;
    this.materialPath = this.$node.data('materialPath');
    this.name = this.materialPath.replace(/.*\.(.*)$/, '$1');
    //!@todo CHANGE THIS
    this.key = this.$node.data('materialIndex');
  }

  processMaterial() {
    const $li = $(`<li class="page-structure__material">${this.name}</li>`);
    return $li;
  }

  static serializeNode($node) {
    return window.FrontendMonster.builder.editable.serializeEditable($node);
  }

  serialize() {
    // material has data-editable-keys with schema
    const editableKeys = this.$node.data('editableKeys');
    const recursiveIterator = function iter(arr, path, $scope) {
      const final = {};
      for (const key of Object.keys(arr)) {
        let fullKeyPath = key;
        if (path) {
          fullKeyPath = `${path}.${key}`;
        }
        if (typeof(arr[key]) === 'object') {
          const $items = $scope.find(`[data-recursive-item="${fullKeyPath}"]`);
          final[key] = {};
          $items.each(function itemsRec() {
            const $this = $(this);
            final[key][$this.data('recursiveItemKey')] = recursiveIterator(
              arr[key],
              'item',
              $this
            );
          });
        } else {
          const $node = $scope.find(`[data-editable-key="${fullKeyPath}"]`);
          final[key] = Material.serializeNode($node);
        }
      }
      return final;
    };
    
    const result = recursiveIterator(editableKeys, '', this.$node);
    console.log(result);
//    this.$node.find('')
    
    return result;
  }
}

export default Material;