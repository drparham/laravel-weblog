<?php

use GeneaLabs\LaravelWeblog\Http\Controllers\Images;
use GeneaLabs\LaravelWeblog\Http\Controllers\Posts;

Route::get(config('vendor.genealabs.laravel-weblog.route-name'), Posts::class . '@index');
Route::resource('posts', Posts::class);

Route::group(['prefix' => 'genealabs/laravel-weblog'], function () {
    Route::resource('images', Images::class);
});
