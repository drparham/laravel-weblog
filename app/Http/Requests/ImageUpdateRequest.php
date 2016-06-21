<?php

namespace GeneaLabs\LaravelWeblog\Http\Requests;

class ImageUpdateRequest extends Request
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

    public function process()
    {
        $uploadedFiles = [];

        $imageData = explode('base64,', $this->get('image_data'))[1];
        $fileName = basename($this->get('image_url'));
        $image = base64_decode($imageData);
        file_put_contents(public_path('vendor/genealabs/laravel-weblog/images/'.$fileName), $image);
    }
}
