<?php

namespace GeneaLabs\LaravelWeblog\Http\Controllers;

use GeneaLabs\LaravelWeblog\Post;
use Illuminate\Support\Facades\Cache;
use Suin\RSSWriter\Channel;
use Suin\RSSWriter\Feed;
use Suin\RSSWriter\Item;

class Rss extends Controller
{
    public function index() : string
    {
        if (Cache::has('rss-feed')) {
            return Cache::get('rss-feed');
        }

        $rss = $this->assembleFeed();

        Cache::add('rss-feed', $rss, 120);

        return $rss;
    }

    private function assembleFeed()
    {
        $feed = new Feed();
        $channel = new Channel();
        $posts = (new Post())->whereNotNull('published_at')->orderBy('published_at', 'DESC')->take(25)->get();

        $channel->title(config('vendor.genealabs.laravel-weblog.title'))
            ->description(config('vendor.genealabs.laravel-weblog.title'))
            ->url(url(config('vendor.genealabs.laravel-weblog.rss-route-name')))
            ->language('en')
            ->copyright(config('vendor.genealabs.laravel-weblog.copyright-notice'))
            ->lastBuildDate($posts->first()->published_at->timestamp)
            ->appendTo($feed);

        foreach ($posts as $post) {
            $item = new Item();

            $item->title($post->title)
                ->description($post->excerpt)
                ->contentEncoded($post->content)
                ->url($post->slug)
                ->author($post->author->name)
                ->pubDate($post->published_at->timestamp)
                ->guid($post->slug, true)
                ->appendTo($channel);
        }

        $feed = $feed->render();
        $feed = str_replace(
            '<rss version="2.0">',
            '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
            $feed
        );
        $feed = str_replace(
            '<channel>',
            '<channel>'."\n".'    <atom:link href="'.url(config('vendor.genealabs.laravel-weblog.rss-route-name')).
            '" rel="self" type="application/rss+xml" />',
            $feed
        );

        return $feed;
    }
}
