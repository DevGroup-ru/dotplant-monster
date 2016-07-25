class Material {
  constructor($node) {
    this.$node = $node;
    this.materialPath = this.$node.data('materialPath');

    this.materialName = this.materialPath.replace(/.*\.(.*)$/, '$1');
    // @todo CHANGE THIS
    this.key = this.$node.data('materialIndex');
  }

  processMaterial() {
    return $(`<li class="page-structure__material">${this.materialName}</li>`);
  }

  static serializeNode($node) {
    return window.FrontendMonster.builder.editable.serializeEditable($node);
  }

  static get frame$() {
    return window.FrontendMonster.builder.frameContentWindow.$;
  }

  serialize() {
    // material has data-editable-keys with schema
    const editableKeys = this.$node.data('editableKeys');
    const recursiveIterator = function iter(arr, path, $scope) {
      const final = {};
      Object.keys(arr).forEach(key => {
        let fullKeyPath = key;
        if (path) {
          fullKeyPath = `${path}.${key}`;
        }
        if (typeof(arr[key]) === 'object') {
          const $items = $scope.find(`[data-recursive-item="${fullKeyPath}"]`);
          final[key] = {};
          $items.each(function itemsRec() {
            const $this = Material.frame$(this);
            final[key][$this.data('recursiveItemKey')] = recursiveIterator(
              arr[key],
              'item',
              $this
            );
          });
        } else {
          const $node = Material.frame$($scope.find(`[data-editable-key="${fullKeyPath}"]`).first());
          final[key] = Material.serializeNode($node);
        }
      });
      return final;
    };

    return recursiveIterator(editableKeys, '', Material.frame$(this.$node));
  }
}

export default Material;
