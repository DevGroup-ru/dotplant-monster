import FrameApi from './../visual-frame/FrameApi';

class BaseEnvironment {
  constructor(visualBuilder, name) {
    this.visualBuilder = visualBuilder;
    this.name = name;
    this.target = $(this.visualBuilder.settings['frame-selector'])[0].contentWindow;
  }

  activate() {
    // deactivate current selected environment
    if (this.name === this.visualBuilder.currentEnvironment) {
      return;
    }
    if (this.visualBuilder.currentEnvironment) {
      this.visualBuilder.environments.get(this.visualBuilder.currentEnvironment).deactivate();
    }
  }

  get target$() {
    return this.target.$;
  }

  deactivate() {
    this.visualBuilder.clearStackable();
  }

  sendMessage(func, args) {
    return FrameApi.sendMessage(this.target, func, args);
  }

  pageChanged() {

  }
}

export default BaseEnvironment;

