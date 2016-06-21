<?php

use GeneaLabs\LaravelWeblog\Http\Controllers\Images;
use GeneaLabs\LaravelWeblog\Http\Controllers\Posts;
use GeneaLabs\LaravelWeblog\Http\Controllers\Rss;
use GeneaLabs\LaravelWeblog\Http\Controllers\Sitemap;

Route::get(config('vendor.genealabs.laravel-weblog.blog-route-name'), Posts::class.'@index');
Route::get(config('vendor.genealabs.laravel-weblog.rss-route-name'), Rss::class.'@index');
Route::get(config('vendor.genealabs.laravel-weblog.sitemap-route-name'), Sitemap::class.'@index');
Route::resource('posts', Posts::class);

Route::group(['prefix' => 'genealabs/laravel-weblog'], function () {
    Route::resource('images', Images::class);
});
