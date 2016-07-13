// if (global.$ === undefined && window.$ === undefined) {
    global.$ = global.jQuery = require('jquery');
// }

global.MediumEditor = require('medium-editor');

require('selectize');
require('./post-editor');
