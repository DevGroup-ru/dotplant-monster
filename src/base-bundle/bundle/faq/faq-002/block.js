window.MonsterBem.blockCallbacks['faq-002'] = function f() {
  /* global polyglot: false */
  const settings = this.blockSettings({
    show: typeof polyglot !== 'undefined' ? polyglot.t('Read more') : 'Read more',
    hide: typeof polyglot !== 'undefined' ? polyglot.t('Hide') : 'Hide',
  });

  // this here is $(this) - jquery object of BEM block
  const $links = this.elem('link');

  $links
    .click(function clickHandler() {
      const $link = $(this);
      const state = $link.mod('active');
      $link.mod('active', !state);
      $link.text(state ? settings.show : settings.hide);
      return false;
    })
    .on('setmod', function setMod(e, modKey) {
      if (modKey === 'active') {
        $(this).prev('.faq__text-hide').fadeIn();
      }
    })
    .on('delmod', function delMod(e, modKey) {
      if (modKey === 'active') {
        $(this).prev('.faq__text-hide').fadeOut();
      }
    });
};
