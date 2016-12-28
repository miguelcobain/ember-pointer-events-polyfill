/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-pointer-events-polyfill',

  included: function(appOrAddon) {
    var app = appOrAddon.app || appOrAddon;
    if (!app.__emberPointerEventsPolyfillIncludedInvoked) {
      app.__emberPointerEventsPolyfillIncludedInvoked = true;
      this._super.included.apply(this, arguments);

      app.import('vendor/pep/pep.js', {
        prepend: true
      });
    }
  },

  treeForVendor: function() {
    var pepPath = path.dirname(require.resolve('pepjs'));
    return new Funnel(this.treeGenerator(pepPath), {
      srcDir: '/',
      destDir: 'pep'
    });
  },
};
