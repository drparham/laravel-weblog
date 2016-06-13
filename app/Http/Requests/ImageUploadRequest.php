<?php namespace GeneaLabs\LaravelWeblog\Http\Requests;
use Illuminate\Support\Collection;

class ImageUploadRequest extends Request
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

    public function process() : array
    {
        $uploadedFiles = [];

        foreach ($this->file('files') as $file) {
            $fileName = basename($file->getClientOriginalName(), '.' . $file->getClientOriginalExtension()) . '_' . str_random(16) . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('vendor/genealabs/laravel-weblog/images'), $fileName);
            $uploadedFiles[] = [
                'url' => asset('vendor/genealabs/laravel-weblog/images/' . $fileName),
            ];
        }

        return ['files' => $uploadedFiles];
    }
}
