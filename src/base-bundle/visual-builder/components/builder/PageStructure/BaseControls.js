class BaseControls {
  constructor(env) {
    this.env = env;
    this.controlButtons = $('<div class="tree-control-buttons" role="presentation"></div>');

    const thatEnv = this.env;
    this.buttonsArray.forEach(conf => {
      const $button = $(`<a href="#" class="tree-control-buttons__button" title="${conf.name}">
  <i class="${conf.icon}"></i>
</a>`);
      $button.click(function clickHandler(){
        const $node = $(this).parent().parent();

        return conf.click(thatEnv.jstreeObj.get_node($node), $node);
      });
      this.controlButtons.append($button);
    });
  }

  get buttonsArray() {
    throw "You must implement buttonsArray";
  }
}

export default BaseControls;