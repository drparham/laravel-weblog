<?php

use GeneaLabs\LaravelWeblog\Http\Controllers\Admin\Posts as CategoriesAdmin;
use GeneaLabs\LaravelWeblog\Http\Controllers\Admin\Tags as TagsAdmin;
use GeneaLabs\LaravelWeblog\Http\Controllers\Posts;

Route::get(config('vendor.genealabs.laravel-weblog.route-name'), Posts::class . '@index');
Route::resource('posts', Posts::class);

Route::group(['prefix' => 'genealabs/laravel-weblog/admin'], function () {
    Route::resource('categories', CategoriesAdmin::class);
    Route::resource('tags', TagsAdmin::class);
});
