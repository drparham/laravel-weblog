@extends (config('vendor.genealabs.laravel-weblog.layout-view'))

@section ('css')
    <style>
        .embed-responsive-4by1 {
          padding-bottom: 25%;
        }

        .embed-responsive-item {
            background-position: center center;
            background-size: cover;
        }
    </style>
@endsection

@section ('content')
    <div class="container">
        @foreach ($posts as $post)
            <div class="card">
                <div class="card-block">
                    <p>
                        <small>
                            <a href="{{ route('posts.edit', $post->id) }}" class="pull-right btn btn-link text-muted">
                                <i class="fa fa-3x fa-edit"></i>
                            </a>
                            <img class="img-circle pull-left m-r-1" src="{{ 'http://www.gravatar.com/avatar/' . md5($post->author->email) . '?s=48' }}">
                            <strong>{{ $post->author->name }}</strong>

                            @if ($post->category)
                                in {{ $post->category->title }}
                            @endif

                            <br>
                            <small class="text-muted">{{ $post->published_at->diffForHumans() }} - {{ $post->readTime }} min read</small>
                        </small>
                    </p>
                    <h1 class="card-title m-b-0">
                        <button type="button" class="btn btn-link">
                            <i class="fa fa-btn fa-2x fa-heart-o"></i>
                        </button>

                        <a href="{{ route('posts.show', $post->id) }}">{{ $post->title }}</a>
                    </h1>
                </div>

                @if ($post->featured_media_url)
                    <div class="embed-responsive embed-responsive-4by1">
                        <div class="embed-responsive-item" style="background-image: url({{ $post->featured_media_url }});"></div>
                    </div>
                @endif

                <div class="card-block">
                    <div class="card-text">
                        {!! $post->excerpt !!}
                        <small> | <a href="{{ route('posts.show', $post->id) }}">Read more...</a></small>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
@endsection
