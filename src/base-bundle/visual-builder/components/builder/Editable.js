import AllEditables from './editables/all';

class Editable {
  constructor() {
    this.editablesByType = {};
    // initialize base build-in editables
    AllEditables();
    this.editablesByType = window.MONSTER_EDITABLES;
  }

  serializeEditable($node) {
    let bemData = $node.data('bem');
    const bemEntity = $node.data('bemMatch');
    if (bemData.hasOwnProperty(bemEntity)) {
      bemData = bemData[bemEntity];
    } else {
      bemData = {};
    }
    if (bemData.hasOwnProperty('editable') === false) {
      return null;
    }
    const editable = bemData.editable;
    let type = editable.hasOwnProperty('type') ? editable.type : 'string';
    if (this.editablesByType.hasOwnProperty(type) === false) {
      type = 'string';
    }

    const exportVariable = editable.hasOwnProperty('target') ? editable.target : 'data';

    return this.editablesByType[type]($node, exportVariable);
  }
}

export default Editable;