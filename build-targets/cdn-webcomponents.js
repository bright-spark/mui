/**
 * MUI WebComponents main module
 * @module webcomponents/main
 */

(function(win) {
  // return if library has already been loaded
  if (win._muiLoadedWC) return;
  else win._muiLoadedWC = true;

  // check browser support
  if (typeof HTMLElement === 'undefined' || !document.registerElement) {
    throw new Error("MUI: Client does not support web components");
  }

  // imports
  var buttons = require('src/webcomponents/buttons'),
      forms = require('src/webcomponents/forms');

  // init
  buttons.registerElements();
  forms.registerElements();
})(window);
