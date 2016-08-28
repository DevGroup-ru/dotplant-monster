import allEditables from './editables/all';

class Editable {
  constructor() {
    this.editablesByType = {};
    // initialize base build-in editables
    allEditables();
    this.editablesByType = window.MONSTER_EDITABLES;
  }

  serializeEditable($node) {
    const editable = $node.data('editableParams');
    if (typeof(editable) !== 'object') {
      return false;
    }
    let type = editable.hasOwnProperty('type') ? editable.type : 'string';
    if (this.editablesByType.hasOwnProperty(type) === false) {
      type = 'string';
    }

    const exportVariable = editable.hasOwnProperty('target') ? editable.target : 'data';

    return this.editablesByType[type].serializeNode($node, exportVariable);
  }

  initializeEditable($node) {
    const type = $node.data('editable-type') || 'uneditable';
    if (type === 'uneditable') {
      return null;
    }

    const editable = this.editablesByType[type] || this.editablesByType.string;
    return editable.initializeEditable($node);
  }
}

export default Editable;
