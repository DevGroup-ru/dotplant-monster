import BaseEditable from './BaseEditable';

class Image extends BaseEditable {
  serializeNode($node) {
    const $img = $node.find('img').first();
    return {
      src: $img.attr('src'),
      alt: $img.attr('alt'),
    };
  }
}

export default Image;
