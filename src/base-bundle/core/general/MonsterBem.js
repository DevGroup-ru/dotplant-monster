class MonsterBem {
  constructor() {
    this.params();
    this.blockCallbacks = {};
  }

  /**
   * Sets MonsterBem settings.
   * Uses MonsterBemSettings variable if provided or default values instead.
   */
  params() {
    const userSettings = window.MonsterBemSettings || {};
    const settings = {};
    Object.keys(userSettings).forEach(key => {
      settings[key] = userSettings[key];
    });
    this.settings = settings;
  }

  update() {
    Object.keys(this.blockCallbacks).forEach(blockName => {
      const callback = this.blockCallbacks[blockName];
      $(`.${blockName}.m-js`).each(function iter() {
        const $this = $(this);
        callback.call($this, blockName);
        $this
          .removeClass('m-js')
          .addClass('m-js-initialized');
      });
    });
  }
}

export default MonsterBem;
