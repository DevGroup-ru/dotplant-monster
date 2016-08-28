import BaseEditable from './BaseEditable';

class WYSIWYG extends BaseEditable {
  serializeNode($node) {
    const node = BaseEditable.frame$($node);
    const editor = node.data('editor');
    if (editor) {
      return editor.getData();
    }
    return node.html();
  }

  initializeEditable($node) {
    const node = $node[0];
    const config = {
      autoParagraph: false,
      enableContentEditable: true,
      ignoreEmptyParagraph: true,
      enterMode: window.CKEDITOR.ENTER_BR,
    };
    // $(() => {
      const editor = window.AlloyEditor.editable(node, config).get('nativeEditor');
      $node.data('editor', editor);
    // });
  }

}

export default WYSIWYG;
