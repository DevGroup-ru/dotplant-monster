import BaseEditable from './BaseEditable';

class TextString extends BaseEditable {
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
    /* global window:false */

    const config = {
      allowedContent: 'i u',
      toolbars: {
        styles: {
          selections: window.AlloyEditor.Selections,
          tabIndex: 1,
        },
      },
      autoParagraph: false,
      enableContentEditable: true,
      ignoreEmptyParagraph: true,
      blockless: true,
      enterMode: window.CKEDITOR.ENTER_BR,
    };
    // $(() => {
    try {
      const editor = window.AlloyEditor.editable(node, config).get('nativeEditor');
      editor.on('key', event => {
        if (event.data.keyCode === 13 || event.data.keyCode === window.CKEDITOR.SHIFT + 13) {
          // add saving function here
          event.cancel();
        }
      });
      editor.on('paste', event => {
        event.data.dataValue = event.data.dataValue.replace(/<br[\s\/]*>/gmi, ' ');
      });
      $node.data('editor', editor);
    } catch (e) {
      console.log($node, node);
      // throw e;
    }
    // });
  }

}

export default TextString;
