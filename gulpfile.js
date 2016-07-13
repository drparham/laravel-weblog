var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.sass('app.scss')
        .styles([
            './public/css/app.css',
            './node_modules/medium-editor/dist/css/themes/default.min.css',
            './node_modules/medium-editor/dist/css/medium-editor.min.css',
            './node_modules/medium-editor-insert-plugin/dist/css/medium-editor-insert-plugin.min.css',
            './node_modules/cropper/dist/cropper.min.css',
            './node_modules/selectize/dist/css/selectize.css'
        ], './public/css/app.css')
        .browserify('app.js')
        .scripts([
            './public/js/app.js',
            './node_modules/cropper/dist/cropper.min.js',
            './node_modules/medium-editor/dist/js/medium-editor.min.js',
            './node_modules/handlebars/dist/handlebars.runtime.min.js',
            './node_modules/jquery-sortable/source/js/jquery-sortable-min.js',
            './node_modules/blueimp-file-upload/js/vendor/jquery.ui.widget.js',
            './node_modules/blueimp-file-upload/js/jquery.iframe-transport.js',
            './node_modules/blueimp-file-upload/js/jquery.fileupload.js',
            './node_modules/medium-editor-insert-plugin/dist/js/medium-editor-insert-plugin.min.js'
        ], './public/js/app.js')
        .version([
            './public/css/app.css',
            './public/js/app.js'
        ])
});
