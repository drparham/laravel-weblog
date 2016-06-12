<?php

return [
    'route-name' => 'blog',
    'user-model' => config('auth.model') ?? config('auth.providers.users.model') ?? null,
    'layout-view' => 'layouts.master',
];
