<?php namespace GeneaLabs\LaravelWeblog\Http\Requests;

use GeneaLabs\LaravelWeblog\Post;

class PostUpdateRequest extends Request
{
    public function authorize() : bool
    {
        return auth()->check();
    }

    public function rules() : array
    {
        return [
            // 'title' => 'required|min:5|unique:posts,id,' . $this->get('posts'),
            // 'content' => 'sometimes|min:5',
        ];
    }

    public function process(Post $post) : Post
    {
        \Log::debug($post);
        $post->fill($this->except('_token'));
        $post->save();

        return $post;
    }
}
