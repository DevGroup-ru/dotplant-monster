import VisualBuilder from './components/builder/VisualBuilder';
import VisualFrame from './components/visual-frame/VisualFrame';
import HashApi from './components/visual-frame/HashApi';

class FrontendMonster {
  constructor() {
    this.params();
    this.visualBulder = null;
    this.hashApi = new HashApi();
    if (window.parent !== window && window.parent.FrontendMonster) {
      if (window.parent.FrontendMonster.hasBuilder) {
        this.VisualFrame = new VisualFrame();
      }
    }
    /* global smoothScroll: false*/
    if (typeof(smoothScroll) !== 'undefined') {
      smoothScroll.init();
    }
  }

  /**
   * Returns VisualBuilder class instance
   * @returns VisualBuilder
   */
  get builder() {
    if (this.visualBulder === null) {
      this.visualBulder = new VisualBuilder();
    }
    return this.visualBulder;
  }

  /**
   * If this FrontendMonster instance has Visual Builder on page
   * @returns {boolean}
   */
  get hasBuilder() {
    return this.builder.$builder.length === 1;
  }

  /**
   * Sets FrontendMonster settings.
   * Uses FrontendMonsterSettings variable if provided or default values instead.
   */
  params() {
    const userSettings = window.FrontendMonsterSettings || {};
    const settings = {};
    Object.keys(userSettings).forEach(key => {
      settings[key] = userSettings[key];
    });
    this.settings = settings;
  }
}

export default FrontendMonster;
