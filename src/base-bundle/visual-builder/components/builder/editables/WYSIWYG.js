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

  initializeEditables(w) {
    const selector = '[data-editable-type=wysiwyg]';
    const config = {
      autoParagraph: false,
      enableContentEditable: true,
      ignoreEmptyParagraph: true,
      enterMode: w.CKEDITOR.ENTER_BR,
    };

    w.$(() => {
      w.$(selector).each(function iter() {
        const editor = w.AlloyEditor.editable(this, config).get('nativeEditor');
        w.$(this).data('editor', editor);
      });
    });
  }
}

export default WYSIWYG;
