import BaseEditable from './BaseEditable';

class TextString extends BaseEditable {
  serializeNode($node) {
    return $node.html();
  }

  initializeEditables(w) {
    const selector = '[data-editable-type=string],[data-editable-type=text]';
    const config = {
      allowedContent: 'i',
      autoParagraph: false,
      ignoreEmptyParagraph: true,
      blockless: true,
      enterMode: w.CKEDITOR.ENTER_BR,
    };
    w.$(function ready() {
      w.$(selector).each(function iter() {
        // const region = new ContentEdit.Region(this[0]);
        $(this).attr('contenteditable', '');
        const editor = w.CKEDITOR.inline(this, config);
        editor.on('key', event => {
          if (event.data.keyCode === 13 || event.data.keyCode === w.CKEDITOR.SHIFT + 13) {
            // add saving function here
            event.cancel();
          }
        });
        editor.on('paste', event => {
          event.data.dataValue = event.data.dataValue.replace(/<br[\s\/]*>/gmi, ' ');
        });
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
