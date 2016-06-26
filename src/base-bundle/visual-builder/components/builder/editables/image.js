export default function image($node) {
  const $img = $node.find('img').first();
  return {
    src: $img.attr('src'),
    alt: $img.attr('alt'),
  };
}
