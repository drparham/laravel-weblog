var featuredImageEditor;
var featuredImageCropper;
var featuredImageCroppedCanvas;
var featuredImageUrl;
var savingIsEnabled = true;

if (window.csrfToken === undefined) {
    window.csrfToken = '';
}

if (window.postUpdateUrl === undefined) {
    window.postUpdateUrl = '';
}

if (window.imageUploadUrl === undefined) {
    window.imageUploadUrl = '';
}

if (window.imageUpdateUrl === undefined) {
    window.imageUpdateUrl = '';
}

if (window.imageDeleteUrl === undefined) {
    window.imageDeleteUrl = '';
}

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
    $('.body-editable').mediumInsert({
        editor: bodyEditor,
        addons: {
            images: {
                deleteMethod: 'DELETE',
                deleteScript: window.imageDeleteUrl,
                fileDeleteOptions: {
                    dataType: 'json',
                    data: {
                        _token: '{{ csrf_token() }}'
                    }
                },
                fileUploadOptions: {
                    url: window.imageUploadUrl,
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
                deleteScript: window.imageDeleteUrl,
                fileDeleteOptions: {
                    dataType: 'json',
                    data: {
                        _token: '{{ csrf_token() }}'
                    }
                },
                fileUploadOptions: {
                    beforeSend: function () {
                        savingIsEnabled = false;
                        console.log('setting to false');
                    },
                    url: window.imageUploadUrl,
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
                    savingIsEnabled = false;
                    featuredImageUrl = data.result.files[0].url;
                    featuredImageCropper = $('#post-image img').cropper({
                        aspectRatio: 2/1,
                        autoCropArea: 1,
                        autoCrop: true,
                        dragMode: 'none',
                        cropBoxResizable: false,
                        movable: false,
                        zoomable: false,
                        rotatable: false,
                        scalable: false,
                        built: function (event) {
                            featuredImageCroppedCanvas = $(this).cropper('getCroppedCanvas');
                        }
                    });
                }
            }
        }
    });


    setInterval(function () {
        if (savingIsEnabled === true) {
            savePost();
        }
    }, 10000);

    registerFeaturedImageRemoveEvent();
    $('#post-image').trigger('DOMSubtreeModified');
    $('#post-image').prop('contenteditable', false);
    $('#post-image').blur(hideMediaInsertButtons);
    $('#post-content').blur(hideContentInsertButtons);
    $('#tags').selectize({
        delimiter: ',',
        persist: false,
        valueField: 'tag',
        labelField: 'tag',
        searchField: 'tag',
        options: tags,
        create: function(input) {
            return {
                tag: input
            };
        }
    });
    $('#category').selectize({
        create: true,
        sortField: 'text'
    });

    function savePost()
    {
        var postTitle = titleEditor.serialize()['post-title'].value;
        var postContent = bodyEditor.serialize()['post-content'].value;
        var postImage = featuredImageEditor.serialize()['post-image'].value;

        if ((postTitle.trim() + postContent.trim() + "").length > 0) {
            $('.saving-indicator').text('- Saving ...');

            $.ajax({
                type: 'PATCH',
                dataType: 'json',
                url: window.postUpdateUrl,
                data: {
                    _token: window.csrfToken,
                    title: postTitle,
                    featured_media: postImage,
                    content: postContent,
                    tags: $('#tags').val()
                },
                success: function (data) {
                    $('.saving-indicator').text('- Saved');
                },
                error: function (xhr, status, error) {
                    $('.saving-indicator').text('- Save Failed');
                }
            });
        }
    }

    function registerFeaturedImageRemoveEvent()
    {
        $('#post-image').bind('DOMSubtreeModified', function ($element) {
            if ($('#post-image').has('figure').length > 0) {
                // stretchFeaturedImage();
                hideMediaInsertButtons();
            } else {
                constrainFeaturedImagePlaceholder();
            }

            if ($('#post-image').has('.cropper-face button').length === 0) {
                $('.cropper-face').html('<button type="button" class="btn btn-sm btn-primary" onclick="cropImage()"><i class="fa fa-btn fa-crop"></i> Crop</button>');
            }
        });
    }

    function cropImage()
    {
        var imageData = featuredImageCroppedCanvas.toDataURL();

        $('#post-image img').cropper('destroy');
        $('#post-image img').attr('src', imageData);

        hideMediaInsertButtons();
        stretchFeaturedImage();

        $.ajax({
            type: 'PATCH',
            dataType: 'json',
            url: window.imageUpdateUrl,
            data: {
                _token: window.csrfToken,
                image_url: featuredImageUrl,
                image_data: imageData
            },
            success: function () {
              $('#post-image img').attr('src', featuredImageUrl);
            },
            error: function () {
              console.log('Upload error');
            }
        });

        savingIsEnabled = true;
    }

    function stretchFeaturedImage()
    {
        $('#post-image').parent('div.container').removeClass('container').addClass('jumbotron-fluid');
    }

    function constrainFeaturedImagePlaceholder()
    {
        // $('#post-image').parent('div.jumbotron-fluid').addClass('container').removeClass('jumbotron-fluid');
    }

    function hideMediaInsertButtons()
    {
        featuredImageEditor._hideInsertButtons($('#post-image'));
    }

    function hideContentInsertButtons()
    {
        featuredImageEditor._hideInsertButtons($('#post-content'));
    }
});
