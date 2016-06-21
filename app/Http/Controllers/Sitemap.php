<?php

namespace GeneaLabs\LaravelWeblog\Http\Controllers;

use GeneaLabs\LaravelWeblog\Post;
use Watson\Sitemap\Sitemap as SitemapGenerator;
use Illuminate\Contracts\Cache\Repository as Cache;
use Illuminate\Http\Request;

class Sitemap extends Controller
{
    public function index(Cache $cache, Request $request) : string
    {
        $sitemap = new SitemapGenerator($cache, $request);
        $sitemap->addSitemap(url(config('vendor.genealabs.laravel-weblog.blog-route-name')));
        $posts = (new Post())->whereNotNull('published_at')->get();

        foreach ($posts as $post) {
            $sitemap->addTag(route('posts.show', $post), $post->published_at, 'daily', '0.8');
        }

        return $sitemap->render();
    }
}
