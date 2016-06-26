![laravel-weblog](https://cloud.githubusercontent.com/assets/1791050/16365117/5e2bb826-3bab-11e6-800e-675a1eef6bbb.jpg)

# Laravel Weblog

## Features

- Drop-in capability for any Laravel 5.2+ project with an established User model.
- Image cropping for featured images during upload process.
- Clean, Medium-inspired interface.
- Dynamic RSS feed.
- Dynamic blog sitemap generation.

(More features planned, see `Milestones` section below.)

## Reasoning

So why create another blog package with so many others out there? After all,
 blogs (or to-do lists) are the _hello world_ projects of the day. The TLDR
 summary is that I was not able to find a single package out there that met the
 following criteria:

  - Drop-in install into any Laravel app minimal or no special configuration.
  - Have a minimalistic interface, without cumbersome admin panels.
  - Function and feel similar to _Medium_: clean, to the point, putting content
     first.
  - Not a static page generator. (Yes, many see that as a benefit, I haven't
     seen it as one -- yet.)

There are one or two nice packages out there, but either their code is
 unnecessarily complex, so buggy that they can't be installed, or require use of
 tedious admin pages.

I was looking for something simpler, yet just as functional. This project is the
 evolution of that (granted, somewhat opinionated) desire. I hope others like me
 will find this package useful.

If you do try it, please send feedback as to how you're using it, where you
 experience friction, and what features (missing or implemented) are preventing
 you from using it.

## Requirements

- Bootstrap 4 (currently in alpha 2)
- jQuery 1.8+
- FontAwesome 4.6+

The above-listed libraries should already be included in your layout view, so
 that they are usable by _Laravel Weblog_.

## Installation

1. Install the package via composer:

  ```sh
  composer require genealabs/laravel-weblog
  ```

2. Add the service provider to your `/config/app.php`:

  ```php
  // $providers = [
      GeneaLabs\LaravelWeblog\Providers\LaravelWeblog::class,
  // ];
  ```

3. Run migrations:

  ```sh
  php artisan weblog:migrate
  ```

4. Publish the required assets:

  ```sh
  php artisan weblog:publish --assets
  ```

## Optional Configuration

By default _Laravel Weblog_ will run with the follow settings:

- Main blog URL: `/blog`.
- RSS Feed URL: `/rss`.
- Blog Sitemap URL `/blog/sitemap`.
- App's User model: detect if either `config('auth.model')` or
 `config('auth.providers.users.model')` exists and use it.
- Layout view: `layouts.master`.

If any of these don't fit your needs, perform the next two steps:

1. Publish the configuration file:

  ```sh
  php artisan weblog:publish --config
  ```

2. Make any desired changes to the paths and layout file options in `/config/laravel-weblog.php`.

## Customization

Naturally the default layout won't necessarily be completely to your liking. The
 views can be overriden with your own customized versions. To publish and
 customize the views, perform the next two steps:

1. Publish the view files:

  ```sh
  php artisan weblog:publish --views
  ```

2. Edit the views as desired in `/resources/views/vendor/genealabs/laravel-weblog`.

## Milestones

### 0.1
- [x] Create a medium-style editor.
- [x] Add an image uploader and manage deletion.
- [x] Add a featured image to blog post.
- [x] Crop featured image to social network standard sizes.
- [x] Create dynamic RSS feed.
- [x] Create dynamic sitemap.

### 0.2

- [ ] Ability to tag posts.
- [ ] Ability to assign a post to a category.
- [ ] Ability to publish in the future.

### 0.3

- [ ] Add email subscription functionality (newsletter signup form).
- [ ] Add social login options (via socialite) that only get triggered when needed.
- [ ] Add social like button (heart) that can share the article on the liker's social networks.
- [ ] Post to Twitter on publish (for future dates as well).
- [ ] Post to Facebook on publish.
- [ ] Post to Apple News on publish.
- [ ] Create Facebook Instant Articles feed.
- [ ] Publish to Medium as articles (and categories as Publications?)
- [ ] Integrate code blocks with GitHub Gist.

### 0.4

- [ ] Add ConstantContact integration for newsletter signup form.
- [ ] Add MailChimp integration for newsletter signup form.

## Installation

## Configuration
