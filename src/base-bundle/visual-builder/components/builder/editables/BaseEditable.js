class BaseEditable {
  serializeNode($node) {

  }

  initializeEditables(w) {

  }

  static get frame$() {
    return window.FrontendMonster.builder.frameContentWindow.$;
  }
}

export default BaseEditable;