let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'js').react().sass('resources/sass/app.scss', 'css');