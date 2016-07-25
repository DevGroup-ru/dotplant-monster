export default function link($node) {
  console.log($node.data());
  console.log($node.data('originalHref'));
  return {
    href: $node.data('originalHref') ? $node.data('originalHref') : $node.attr('href'),
    anchor: $node.html(),
  };
}
