@extends (config('vendor.genealabs.laravel-weblog.layout-view'))

@section ('css')
    <link rel="stylesheet" href="{{ elixir('css/app.css', 'build/vendor/genealabs/laravel-weblog') }}">
    <style>
        [contenteditable] {
            outline: 0 solid transparent;
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
                    Draft
                    <small><em class="saving-indicator text-muted"></em></small>
                </p>
            </div>
            <h1 id="post-title" class="title-editable" data-placeholder="Title">{{ $post->title }}</h1>
            <div id="post-content" class="body-editable" data-placeholder="Tell your story...">{!! $post->content !!}</div>
        </div>
    </div>
@endsection

@section ('js')
    <script src="{{ elixir('js/app.js', 'build/vendor/genealabs/laravel-weblog') }}"></script>
    <script>
            $(document).ready(function () {
                var titleEditor = new MediumEditor('.title-editable', {
                    buttonLabels: 'fontawesome',
                    toolbar: {
                        buttons: ['bold', 'italic', 'underline']
                    }
                });
                var bodyEditor = new MediumEditor('.body-editable', {
                    buttonLabels: 'fontawesome',
                });
                $('.body-editable').mediumInsert({
                    editor: bodyEditor,
                    addons: {
                        images: {
                            deleteMethod: 'DELETE',
                            deleteScript: '{{ route('genealabs.laravel-weblog.images.destroy', $post->id) }}',
                            fileDeleteOptions: {
                                dataType: 'json',
                                data: {
                                    _token: '{{ csrf_token() }}'
                                }
                            },
                            fileUploadOptions: {
                                url: '{{ route('genealabs.laravel-weblog.images.store') }}',
                                type: 'POST',
                                acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
                                formData: [
                                    {
                                        name: '_token',
                                        value: '{{ csrf_token() }}'
                                    }
                                ]
                            }
                        }
                    }
                });

                setInterval(function () {
                    var postTitle = titleEditor.serialize()['post-title']['value'];
                    var postContent = bodyEditor.serialize()['post-content']['value'];

                    if ((postTitle.trim() + postContent.trim() + "").length > 0) {
                        $('.saving-indicator').text('- Saving ...');

                        $.ajax({
                            type: 'PATCH',
                            dataType: 'json',
                            url: '{{ route('posts.update', $post->id) }}',
                            data: {
                                _token: '{{ csrf_token() }}',
                                title: postTitle,
                                content: postContent
                            },
                            success: function (data) {
                                $('.saving-indicator').text('- Saved');
                            },
                            error: function (xhr, status, error) {
                                $('.saving-indicator').text('- Save Failed');
                                console.log('post save error', xhr, status, error);
                            }
                        });
                    }
                }, 10000)
            });
    </script>
@endsection
