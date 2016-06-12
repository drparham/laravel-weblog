@extends (config('vendor.genealabs.laravel-weblog.layout-view'))

@section ('content')
    <div class="container">
        @foreach ($posts as $post)
            <div class="card">
                <table class="table-hover table-striped table-bordered table-responsive">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Tags</th>
                            <th>Published At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                checkbox
                            </td>
                            <td>
                                <a href="{{ route('genealabs.laravel-weblog.admin.posts.show', $post->id) }}">
                                    {{ $post->title }}
                                </a>
                            </td>
                            <td>
                                <a href="{{ route('genealabs.laravel-weblog.admin.authors.show', $post->author->id) }}">
                                    {{ $post->author->name }}
                                </a>
                            </td>
                            <td>
                                <a href="{{ route('genealabs.laravel-weblog.admin.categories.show', $post->category->id) }}">
                                    {{ $post->category->title }}
                                </a>
                            </td>
                            <td>
                                @foreach ($post->tags as $tag)
                                    <a href="{{ route('genealabs.laravel-weblog.admin.tags.show', $tag->id) }}">
                                        {{ $tag->title }}
                                    </a>
                                @endforeach
                            </td>
                            <td>
                                {{ $post->published_at }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        @endforeach
    </div>
@endsection
