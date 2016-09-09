/**
 * Dialog helper class for use with jquery-popup-overlay.
 * Example usage:
 * ```javascript
 * var d = DialogHelper
 *   .builderDialog()
 *   .html("HALO")
 *   .autoDestroy()
 *   .show();
 * ```
 *
 * Another simple usage:
 * ```
 * window.DialogHelper
 *   .builderDialog()
 *   .onAjaxLoad((data, $target, dialog, dataChanger) => {
 *       dataChanger(data ? '<div>OK</div>' : '<div>Error</div>');
 *       return true;
 *     })
 *   .ajax({
 *     url: '/monster/bundles/clear-cache',
 *     method: 'POST',
 *     dataType: 'json', // true or false is returned
 *   })
 *   .autoDestroy()
 *   .show();
 * ```
 */
class DialogHelper {
  /**
   * Constructor.
   * Initializes base properties and creates DOM node.
   */
  constructor(options) {
    this.resetParams();
    this.$node = $('<div class="monster-dialog"></div>');
    const newOptions = $.extend(
      {
        pagecontainer: '.m-wrapper',
        closetransitionend: () => {
          this.onCloseChain.forEach(f => {
            f();
          });
          if (this.autoDestroyOnClose) {
            this.destroy();
          }
        },
      },
      options
    );
    this.$node.popup(newOptions);
    this.$body = $('<div class="monster-dialog__body"></div>');
    this.$node.append(this.$body);
    this.$node.closest('.popup_wrapper').addClass('m-wrapper');
  }

  /**
   * Creates new DialogHelper and returns it.
   * @param {object} options
   * @returns {DialogHelper}
   */
  static dialog(options = {}) {
    return new DialogHelper(options);
  }

  /**
   * Creates new DialogHelper in VisualBuilder theme.
   * @param {object} options
   * @returns {DialogHelper}
   */
  static builderDialog(options = {}) {
    const dialog = DialogHelper.dialog(options);
    return dialog.node($node => $node.mod('theme', 'builder'));
  }

  /**
   * Internal function - resets class params.
   */
  resetParams() {
    this.$node = null;
    this.autoDestroyOnClose = false;
    this.onCloseChain = [];
    this.onAjaxLoadChain = [];
    this.$loader = null;
    this.$body = null;
    this.$title = null;
    this.$closeButton = null;
  }

  /**
   * Enables or disables close button.
   * @param {boolean} enabled
   * @returns {DialogHelper}
   */
  closeButton(enabled = true) {
    if (enabled && this.$closeButton === null) {
      this.$closeButton = $('<div class="monster-dialog__close"></div>');
      this.$closeButton.prepend(this.$node);
      this.$closeButton.click(() => this.$node.popup('hide'));
    }
    if (!enabled && this.$closeButton !== null) {
      this.$closeButton.remove();
      this.$closeButton = null;
    }
    return this;
  }

  /**
   * Show close on mobile devices.
   * @param {boolean} tablet Treat tablet as mobile devices too.
   * @returns {DialogHelper}
   */
  showCloseOnMobile(tablet = false) {
    /* global is:false */
    if (is.mobile() || (tablet && is.tablet())) {
      this.closeButton(true);
    }
    return this;
  }

  /**
   * Set autoDestroy option. If true - destroys DOM node on close.
   * @param {boolean} value
   * @returns {DialogHelper}
   */
  autoDestroy(value = true) {
    this.autoDestroyOnClose = value;
    return this;
  }

  /**
   * Set the dialog title. Adds title element if not set
   * @param {string|$|boolean} title
   * @returns {DialogHelper}
   */
  title(title) {
    if (this.$title === null && title === false) {
      this.$title.remove();
      this.$title = null;
      return this;
    }
    if (this.$title === null) {
      this.$title = $('<div class="monster-dialog__title"></div>');
      this.$title.prependTo(this.$node);
    }
    if (title instanceof $) {
      this.$title.append(title);
    } else {
      this.$title.html(title);
    }
    return this;
  }

  /**
   * Run some actions on $node element
   * @param {DialogHelper~node} f Function to run on element, accepts $node as a param
   * @returns {DialogHelper}
   */
  node(f) {
    f(this.$node);
    return this;
  }

  /**
   * Run some actions on $body element
   * @param {DialogHelper~body} f Function to run on element, accepts $body as a param
   * @returns {DialogHelper}
   */
  body(f) {
    f(this.$body);
    return this;
  }

  /**
   * Set HTML content of popup.
   *
   * @param {string|$} html String or jQuery node.
   * @returns {DialogHelper}
   */
  html(html) {
    if (html instanceof $) {
      this.$body.empty();
      this.$body.append(html);
    } else {
      this.$body.html(html);
    }
    return this;
  }

  /**
   * Creates loader element
   * @returns {DialogHelper}
   */
  createLoader() {
    if (this.$loader === null) {
      this.$loader = $('<div class="monster-dialog__loader"></div>');
      this.$node.prepend(this.$loader);
    }
    return this;
  }

  /**
   * Run some actions on $loader element
   * @param {DialogHelper~loader} f Function to run on element, accepts $loader as a param
   * @returns {DialogHelper}
   */
  loader(f) {
    this.createLoader();
    f(this.$loader);
    return this;
  }

  /**
   * Runs ajax request for some popup content.
   * Shows loader while request is processed.
   *
   * @param {object} $ajax PlainObject configuration for $.ajax @see http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings
   * @param {$|null} target Where to insert requested content: jQuery $node or null for default body.
   * @returns {DialogHelper}
   */
  ajax($ajax, target = null) {
    // ensure loader is created
    this.createLoader();
    // show loader as we are starting request now
    this.$loader.show();

    const $target = target instanceof $ ? target : this.$body;
    /* eslint-disable no-unused-vars, no-param-reassign */
    $ajax.dataType = $ajax.dataType || 'html';

    $
      .ajax($ajax)
      .fail((jqXHR, textStatus, errorThrown) => {
        // @todo: display error somehow
      })
      .done((data, textStatus, jqXHR) => {
        let ok = true;
        let ajaxData = data;
        const changeData = (newData) => {
          ajaxData = newData;
        };
        this.onAjaxLoadChain.forEach(f => {
          ok = ok && f(ajaxData, $target, this, changeData);
        });
        if (ok) {
          const $data = $(ajaxData);
          $target.append($data);
        }
        this.$loader.hide();
      });
    /* eslint-enable no-unused-vars, no-param-reassign */
    return this;
  }

  /**
   * Add callback to chain on ajax.
   *
   * @param f
   * @returns {DialogHelper}
   */
  onAjaxLoad(f) {
    this.onAjaxLoadChain.push(f);
    return this;
  }

  /**
   * Add callback to chain on close.
   *
   * @param f
   * @returns {DialogHelper}
   */
  onClose(f) {
    this.onCloseChain.push(f);
    return this;
  }

  /**
   * Shows popup.
   * @returns {DialogHelper}
   */
  show() {
    this.$node.data('dialogHelperInstance', this);
    this.$node.popup('show');
    return this;
  }

  /**
   * Hides the popup.
   * @returns {DialogHelper}
   */
  hide() {
    this.$node.popup('hide');
    return this;
  }

  /**
   * Destroys popup DOM node.
   */
  destroy() {
    if (this.$node) {
      const $wrapper = this.$node.closest('.popup_wrapper');
      const id = this.$node.attr('id');
      const $background = $(`#${id}_background`);
      $background.remove();
      $wrapper.remove();

      if (this.$loader) {
        this.$loader.remove();
      }
      if (this.$title) {
        this.$title.remove();
      }
      this.$body.remove();
      this.$node.remove();
      this.resetParams();
    }
  }
  /**
   * Callback used by node.
   * @callback DialogHelper~node
   * @param {object} $node
   */
  /**
   * Callback used by loader.
   * @callback DialogHelper~loader
   * @param {object} $loader
   */
  /**
   * Callback used by body.
   * @callback DialogHelper~body
   * @param {object} $body
   */
}

export default DialogHelper;
