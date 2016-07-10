@extends (config('vendor.genealabs.laravel-weblog.layout-view'))

@section ('css')
    <link rel="stylesheet" href="{{ elixir('css/app.css', 'vendor/genealabs/laravel-weblog') }}">
@endsection

@section ('content')
    <div class="container">
        <div class="clearfix p-t-1 m-b-2">
            <img class="img-circle pull-left m-r-2" src="{{ 'http://www.gravatar.com/avatar/' . md5(auth()->user()->email) . '?s=60' }}">
            <p class="form-inline">
                <strong>{{ auth()->user()->name }}</strong>
                <input type="text" id="tags" class="form-control form-control-sm pull-right" value="{{ $post->tags->implode('name', ',') }}">
                <label class="form-control-label pull-right">Tags</label>
            </p>
            <p>{{ auth()->user()->bio }}</p>
            <p class="form-inline">
                Draft
                <small><em class="saving-indicator text-muted"></em></small>
                <select id="category" class="form-control form-control-sm pull-right">
                    <option>Genealogy</option>
                    <option>Development</option>
                </select>
                <label class="form-control-label pull-right">Category</label>
            </p>
        </div>
        <h1 id="post-title" class="title-editable" data-placeholder="Title">{{ $post->title }}</h1>
    </div>

    <div class="container">
        <div id="post-image" class="image-editable" data-placeholder="Add a featured image ...">{!! $post->featured_media !!}</div>
    </div>
    <div class="container">
        <div class="clearfix p-t-1 m-b-2">
            <div id="post-content" class="body-editable" data-placeholder="Tell your story...">{!! $post->content !!}</div>
        </div>
    </div>
@endsection

@section ('js')
    <script>
        window.csrfToken = '{{ csrf_token() }}';
        window.postUpdateUrl = '{{ route('posts.update', $post->id) }}';
        window.imageUploadUrl = '{{ route('genealabs.laravel-weblog.images.store') }}';
        window.imageUpdateUrl = '{{ route('genealabs.laravel-weblog.images.update', 0) }}';
        window.imageDeleteUrl = '{{ route('genealabs.laravel-weblog.images.destroy', $post->id) }}';
        window.tags = {!! $tags->toJson() !!}
    </script>

    <script src="{{ elixir('js/app.js', 'vendor/genealabs/laravel-weblog') }}"></script>
@endsection
