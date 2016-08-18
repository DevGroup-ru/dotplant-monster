import BaseEditable from './BaseEditable';

class WYSIWYG extends BaseEditable {
  serializeNode($node) {
    return $node.html();
  }

  initializeEditables(w) {
    // w.tinymce.init({
    //   selector: '[data-editable-type=wysiwyg]',
    //   element_format: 'html',
    //   hidden_input: false,
    //   forced_root_block: false,
    //   inline: true,
    // });
  }
}

export default WYSIWYG;
