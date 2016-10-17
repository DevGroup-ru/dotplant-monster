import BaseControls from './BaseControls';

class MaterialControls extends BaseControls {
  get buttonsArray() {
    return [
      {
        icon: 'fa fa-arrow-right',
        name: 'Select',
        click: (jsTreeNode/*, $node*/) => {
          this.env.selectMaterial(jsTreeNode.data.materialIndex);
          return false;
        }
      },
      {
        icon: 'fa fa-trash-o',
        name: 'Remove',
        click: (/*jsTreeNode, $node*/) => {
          this.env.jstreeObj.delete_node(this.env.jstreeObj.get_selected());
          this.env.updatePageStructureJson();
          this.env.target.FrontendMonster.VisualFrame.preview();
          return false;
        }
      }
    ];
  }
}

export default MaterialControls;