import BaseEditable from './BaseEditable';

class Link extends BaseEditable {
  serializeNode($node) {
    return {
      href: $node.data('originalHref') ? $node.data('originalHref') : $node.attr('href'),
      anchor: $node.html(),
    };
  }
}

export default Link;
