<?php

namespace GeneaLabs\LaravelWeblog\Http\Controllers;

use GeneaLabs\LaravelWeblog\Post as PostModel;
use GeneaLabs\LaravelWeblog\Http\Requests\PostUpdateRequest;
use Illuminate\View\View;
use stdClass;

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
        $tags = $post->existingTags()->pluck('name')->map(function ($tag) {
            $newTag = new stdClass();
            $newTag->tag = $tag;

            return $newTag;
        });

        return view('genealabs-laravel-weblog::posts.edit', compact('post', 'tags'));
    }

    public function show(PostModel $posts) : View
    {
        $post = $posts;

        return view('genealabs-laravel-weblog::posts.show', compact('post'));
    }

    public function edit(PostModel $posts) : View
    {
        $post = $posts;
        $tags = $post->existingTags()->pluck('name')->map(function ($tag) {
            $newTag = new stdClass();
            $newTag->tag = $tag;

            return $newTag;
        });

        return view('genealabs-laravel-weblog::posts.edit', compact('post', 'tags'));
    }

    public function update(PostModel $posts, PostUpdateRequest $request) : PostModel
    {
        return $request->process($posts);
    }
}
