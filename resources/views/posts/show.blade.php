@extends (config('vendor.genealabs.laravel-weblog.layout-view'))

@section ('css')
    <link rel="stylesheet" href="{{ elixir('css/app.css', 'vendor/genealabs/laravel-weblog') }}">
@endsection

@section ('content')
    <div class="container">
        <div class="clearfix p-t-1 m-b-2">
            <img class="img-circle pull-left m-r-2" src="{{ 'http://www.gravatar.com/avatar/' . md5($post->author->email) . '?s=60' }}">
            <p><strong>{{ $post->author->name }}</strong></p>
            <p>
                Published on {{ $post->published_at }}

                @if ($post->category)
                    in {{ $post->category->title }}
                @endif

                <small><em class="saving-indicator text-muted"></em></small>
            </p>
        </div>
        <h1>{{ $post->title }}</h1>
    </div>

    <div class="featured-media jumbotron embed-responsive embed-responsive-2by1">
        <div class="embed-responsive-item">
            {!! $post->featured_media ?? '' !!}
        </div>
    </div>

    <div class="container">
        <div>{!! $post->content !!}</div>
    </div>
@endsection
