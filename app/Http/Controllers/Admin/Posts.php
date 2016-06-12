<?php namespace GeneaLabs\LaravelWeblog\Http\Controllers\Admin;

use GeneaLabs\LaravelWeblog\Http\Controllers\Controller;
use GeneaLabs\LaravelWeblog\Post as PostModel;
use Illuminate\View\View;

class Posts extends Controller
{
    public function index() : View
    {
        $posts = (new PostModel)->all();

        return view('genealabs-laravel-weblog::admin.posts.index', compact('posts'));
    }
}
