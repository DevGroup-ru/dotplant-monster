import BaseEditable from './BaseEditable';

class TextString extends BaseEditable {
  serializeNode($node) {
    const node = BaseEditable.frame$($node);
    const editor = node.data('editor');
    if (editor) {
      return editor.getData();
    } else {
      return node.html();
    }
  }

  initializeEditables(w) {
    const selector = '[data-editable-type=string],[data-editable-type=text]';
    const config = {
      allowedContent: 'i u',
      toolbars: {
        styles: {
          selections: w.AlloyEditor.Selections,
          tabIndex: 1,
        },
      },
      autoParagraph: false,
      enableContentEditable: true,
      ignoreEmptyParagraph: true,
      blockless: true,
      enterMode: w.CKEDITOR.ENTER_BR,
    };

    w.$(() => {
      w.$(selector).each(function iter() {
        const editor = w.AlloyEditor.editable(this, config).get('nativeEditor');
        editor.on('key', event => {
          if (event.data.keyCode === 13 || event.data.keyCode === w.CKEDITOR.SHIFT + 13) {
            // add saving function here
            event.cancel();
          }
        });
        editor.on('paste', event => {
          event.data.dataValue = event.data.dataValue.replace(/<br[\s\/]*>/gmi, ' ');
        });
        w.$(this).data('editor', editor);
      });
    });


    // w.tinymce.init({
    //   selector: '[data-editable-type=string],[data-editable-type=text]',
    //   element_format: 'html',
    //   hidden_input: false,
    //   forced_root_block: false,
    //   inline: true,
    //   menubar: false,
    //   valid_elements: 'br,p,a',
    //   formats: {
    //     underline: {},
    //     italic: {},
    //     bold: {},
    //   },
    //   toolbar: 'undo redo',
    // });
    // const editor = new w.MediumEditor('[data-editable-type=string],[data-editable-type=text]', {
    //   disableReturn: true,
    //   toolbar: {
    //     sticky: true,
    //     buttons: [],
    //   },
    //   keyboardCommands: false,
    // });
  }
}

export default TextString;
