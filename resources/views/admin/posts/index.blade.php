@extends (config('vendor.genealabs.laravel-weblog.layout-view'))

@section ('content')
    <div class="container">
        <div class="card m-t-1">
            <table class="table table-hover table-striped table-bordered">
                <thead class="thead-default">
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
                    @foreach ($posts as $post)
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
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection
