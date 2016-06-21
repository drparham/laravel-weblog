<?php

return [
    'blog-route-name' => 'blog',
    'rss-route-name' => 'rss',
    'sitemap-route-name' => 'blog/sitemap',
    'user-model' => config('auth.model') ?? config('auth.providers.users.model') ?? null,
    'layout-view' => 'layouts.master',
];
