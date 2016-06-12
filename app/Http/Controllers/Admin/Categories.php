<?php namespace GeneaLabs\LaravelWeblog\Http\Controllers\Admin;

use GeneaLabs\LaravelWeblog\Category;
use GeneaLabs\LaravelWeblog\Http\Controllers\Controller;
use Illuminate\View\View;

class Categories extends Controller
{
    public function index() : View
    {
        $categories = (new Category)->all();

        return view('genealabs-laravel-weblog::admin.categories.index', compact('categories'));
    }
}
