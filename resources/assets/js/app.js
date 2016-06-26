if (global.$ == null && window.$ == null) {
    global.$ = global.jQuery = require('jquery');
}

global.MediumEditor = require('medium-editor');

require('./post-editor');
