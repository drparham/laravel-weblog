<?php namespace GeneaLabs\LaravelWeblog\Http\Controllers;

use GeneaLabs\LaravelWeblog\Post as PostModel;
use GeneaLabs\LaravelWeblog\Http\Requests\ImageDeleteRequest;
use GeneaLabs\LaravelWeblog\Http\Requests\ImageUploadRequest;
use Illuminate\View\View;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Collection;

class Images extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store(ImageUploadRequest $request) : string
    {
        return json_encode($request->process(), JSON_UNESCAPED_SLASHES);
    }

    public function destroy(ImageDeleteRequest $request)
    {
        return $request->process();
    }
}
