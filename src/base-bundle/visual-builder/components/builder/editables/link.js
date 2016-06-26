export default function link($node) {
  return {
    src: $node.attr('href'),
    anchor: $node.html(),
  };
}
