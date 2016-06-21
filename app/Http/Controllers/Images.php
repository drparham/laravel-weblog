<?php

namespace GeneaLabs\LaravelWeblog\Http\Controllers;

use GeneaLabs\LaravelWeblog\Http\Requests\ImageDeleteRequest;
use GeneaLabs\LaravelWeblog\Http\Requests\ImageUploadRequest;
use GeneaLabs\LaravelWeblog\Http\Requests\ImageUpdateRequest;

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

    public function update(ImageUpdateRequest $request)
    {
        $request->process();

        return response('', 204);
    }

    public function destroy(ImageDeleteRequest $request)
    {
        return $request->process();
    }
}
