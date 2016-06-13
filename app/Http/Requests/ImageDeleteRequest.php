<?php namespace GeneaLabs\LaravelWeblog\Http\Requests;

use Illuminate\Support\Facades\File;

class ImageDeleteRequest extends Request
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
        $path = parse_url($this->get('file'), PHP_URL_PATH);
        File::delete(public_path($path));
    }
}
