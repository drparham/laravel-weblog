<?php

namespace GeneaLabs\LaravelWeblog\Http\Controllers;

use GeneaLabs\LaravelWeblog\Post as PostModel;
use GeneaLabs\LaravelWeblog\Http\Requests\PostUpdateRequest;
use Illuminate\View\View;

class Posts extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => ['index', 'show']]);
    }

    public function index() : View
    {
        $posts = (new PostModel())->all();

        return view('genealabs-laravel-weblog::posts.index', compact('posts'));
    }

    public function create() : View
    {
        $post = (new PostModel())->create([
            'title' => 'Title ...',
            'slug' => 'new-story-'.str_random(32),
            'content' => 'Tell your story ...',
        ]);
        $post->author()->associate(auth()->user());
        $post->save();
        $post->title = null;
        $post->content = null;

        return view('genealabs-laravel-weblog::posts.edit', compact('post'));
    }

    public function show(PostModel $posts) : View
    {
        $post = $posts;

        return view('genealabs-laravel-weblog::posts.show', compact('post'));
    }

    public function edit(PostModel $posts) : View
    {
        $post = $posts;

        return view('genealabs-laravel-weblog::posts.edit', compact('post'));
    }

    public function update(PostModel $posts, PostUpdateRequest $request) : PostModel
    {
        return $request->process($posts);
    }
}
