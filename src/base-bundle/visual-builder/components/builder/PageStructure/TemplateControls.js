import BaseControls from '../PageStructure/BaseControls';

class TemplateControls extends BaseControls {
  get buttonsArray() {
    return [
      {
        icon: 'fa fa-ellipsis-h',
        name: 'Select',
        click: (jsTreeNode/*, $node*/) => {

          return false;
        }
      }
    ];
  }

  preInit() {
    /**
     * @type {DialogHelper}
     */
    const helper = window.DialogHelper;
    helper.builderDialog()
      .
  }
}

export default TemplateControls;