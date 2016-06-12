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
        <div>
            <div class="clearfix p-t-1 m-b-2">
                <img class="img-circle pull-left m-r-2" src="{{ 'http://www.gravatar.com/avatar/' . md5(auth()->user()->email) . '?s=60' }}">
                <p><strong>{{ auth()->user()->name }}</strong></p>
                <p>{{ auth()->user()->bio }}</p>
                <p>
                    Published on {{ $post->published_at }}

                    @if ($post->category)
                        in {{ $post->category->title }}
                    @endif

                    <small><em class="saving-indicator text-muted"></em></small>
                </p>
            </div>
            <h1>{{ $post->title }}</h1>
            <div>{!! $post->content !!}</div>
        </div>
    </div>
@endsection
