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
        <a href="{{ route('posts.create') }}" class="btn btn-primary-outline pull-sm-right">
            Add Post
        </a>
        <h1>Blog</h1>
        @foreach ($posts as $post)
            <div class="card {{ $post->published_at ? '' : 'bg-faded text-muted' }} m-t-1">
                <div class="card-block">
                    <p>
                        <small>
                            <a href="{{ route('posts.edit', $post->id) }}" class="pull-right btn btn-link {{ $post->published_at ? 'text-muted' : '' }}">
                                <i class="fa fa-3x fa-edit"></i>
                            </a>

                            @if ($post->author)
                                <img class="img-circle pull-left m-r-1" src="{{ 'http://www.gravatar.com/avatar/' . md5($post->author->email) . '?s=48' }}">
                                <strong>{{ $post->author->name }}</strong>
                            @endif

                            @if ($post->category)
                                in {{ $post->category->title }}
                            @endif

                            <br>
                            <small class="text-muted">{{ $post->published_at ? $post->published_at->diffForHumans() : 'Draft' }} - {{ $post->readTime }} min read</small>
                        </small>
                    </p>
                    <h1 class="card-title {{ $post->featured_media ? 'm-b-0' : '' }}">

                        @if ($post->published_at)
                            <a href="{{ route('posts.show', $post->id) }}">
                        @endif

                        {{ $post->title }}

                        @if ($post->published_at)
                            </a>
                        @endif

                    </h1>

                @if ($post->featured_media)
                </div>
                    <div class="embed-responsive embed-responsive-4by1">
                        <div class="embed-responsive-item" style="background-image: url({{ $post->featured_media ?? '' }});"></div>
                    </div>
                <div class="card-block">
                @endif

                    <div class="card-text">
                        {!! $post->excerpt !!}

                        @if ($post->published_at)
                            <small> | <a href="{{ route('posts.show', $post->id) }}">Read more...</a></small>
                        @endif

                    </div>
                </div>
            </div>
        @endforeach
    </div>
@endsection
