<?php namespace GeneaLabs\LaravelWeblog\Http\Controllers\Admin;

use GeneaLabs\LaravelWeblog\Http\Controllers\Controller;
use GeneaLabs\LaravelWeblog\Tag;
use Illuminate\View\View;

class Tags extends Controller
{
    public function index() : View
    {
        $tags = (new Tag)->all();

        return view('genealabs-laravel-weblog::admin.tags.index', compact('tags'));
    }
}
