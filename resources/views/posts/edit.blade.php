@extends (config('vendor.genealabs.laravel-weblog.layout-view'))

@section ('css')
    <link rel="stylesheet" href="{{ elixir('css/app.css', 'vendor/genealabs/laravel-weblog') }}">
    <style>
        [contenteditable] {
            outline: 0 solid transparent;
        }
    </style>
@endsection

@section ('content')
    <div class="container">
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
    <script src="{{ elixir('js/app.js', 'vendor/genealabs/laravel-weblog') }}"></script>

    <script>
        var featuredImageEditor;

            $(document).ready(function () {
                var titleEditor = new MediumEditor('.title-editable', {
                    buttonLabels: 'fontawesome',
                    toolbar: {
                        buttons: ['bold', 'italic', 'underline']
                    }
                });
                featuredImageEditor = new MediumEditor('.image-editable', {
                    buttonLabels: 'fontawesome',
                    toolbar: {
                        buttons: []
                    }
                });
                var bodyEditor = new MediumEditor('.body-editable', {
                    buttonLabels: 'fontawesome',
                });
                // $('#featuredImage').cropper({
                    // aspectRatio: 1/2,
                    // movable: false,
                    // zoomable: false,
                    // rotatable: false,
                    // scalable: false
                // });
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
                $('.image-editable').mediumInsert({
                    editor: featuredImageEditor,
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
                            },
                            uploadCompleted: function ($element, data) {
                                $('#post-image').find('img').css('width', '100%').css('height', 'auto');
                            }
                        }
                    }
                });


                setInterval(function () {
                    var postTitle = titleEditor.serialize()['post-title']['value'];
                    var postContent = bodyEditor.serialize()['post-content']['value'];
                    var postImage = featuredImageEditor.serialize()['post-image']['value'];

                    if ((postTitle.trim() + postContent.trim() + "").length > 0) {
                        $('.saving-indicator').text('- Saving ...');

                        $.ajax({
                            type: 'PATCH',
                            dataType: 'json',
                            url: '{{ route('posts.update', $post->id) }}',
                            data: {
                                _token: '{{ csrf_token() }}',
                                title: postTitle,
                                featured_media: postImage,
                                content: postContent
                            },
                            success: function (data) {
                                $('.saving-indicator').text('- Saved');
                            },
                            error: function (xhr, status, error) {
                                $('.saving-indicator').text('- Save Failed');
                            }
                        });
                    }
                }, 10000);

                registerFeaturedImageRemoveEvent();
                $('#post-image').trigger('DOMSubtreeModified');
                $('#post-image').prop('contenteditable', false)
            });

            function registerFeaturedImageRemoveEvent()
            {
                $('#post-image').bind('DOMSubtreeModified', function ($element) {
                    if ($('#post-image').has('figure').length > 0) {
                        stretchFeaturedImage();
                        hideMediaInsertButtons();
                    } else {
                        constrainFeaturedImagePlaceholder();
                    }
                });
            }

            function stretchFeaturedImage()
            {
                $('#post-image').parent('div.container').removeClass('container').addClass('jumbotron-fluid');
            }

            function constrainFeaturedImagePlaceholder()
            {
                $('#post-image').parent('div.jumbotron-fluid').addClass('container').removeClass('jumbotron-fluid');
            }

            function hideMediaInsertButtons()
            {
                $('.jumbotron-fluid .medium-insert-buttons').hide();
            }
    </script>
@endsection
