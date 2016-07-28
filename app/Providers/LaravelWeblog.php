<?php

namespace GeneaLabs\LaravelWeblog\Providers;

use GeneaLabs\LaravelWeblog\Console\Commands\Migrate;
use GeneaLabs\LaravelWeblog\Console\Commands\Publish;
use Illuminate\Support\AggregateServiceProvider;
use Illuminate\Foundation\AliasLoader;
use Watson\Sitemap\Facades\Sitemap;

class LaravelWeblog extends AggregateServiceProvider
{
    protected $defer = false;
    protected $providers = [
        \Watson\Sitemap\SitemapServiceProvider::class,
    ];

    public function boot()
    {
        if (!$this->app->routesAreCached()) {
            require __DIR__.'/../Http/routes.php';
        }

        $this->publishes([
            __DIR__.'/../../public/build' => public_path('vendor/genealabs/laravel-weblog'),
        ], 'assets');

        $this->publishes([
            __DIR__.'/../../config/laravel-weblog.php' => config_path('laravel-weblog.php'),
        ], 'config');

        $this->publishes([
            __DIR__.'/../../resources/views' => base_path('resources/views/vendor/genealabs/laravel-weblog/'),
        ], 'views');

        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'genealabs-laravel-weblog');

        if (!config('laravel-weblog.user-model')) {
            throw new Exception("You haven't specified a user model. Please add an entry for 'model' or 'providers.users.model' in /config/auth.php. Alternatively you may publish the configuration file ('php artisan weblog:publish --config') and specify your user model there.");
        }

        // $this->registerBladeDirective('open', 'form');
    }

    public function register()
    {
        parent::register();

        AliasLoader::getInstance()->alias('sitemap', Sitemap::class);
        $this->mergeConfigFrom(__DIR__.'/../../config/laravel-weblog.php', 'laravel-weblog');
        $this->commands(Migrate::class);
        $this->commands(Publish::class);
    }

    public function provides() : array
    {
        return ['genealabs-laravel-weblog'];
    }

    /*
        private function registerBladeDirective(string $formMethod, string $alias = '') : string
        {
            $alias = $alias ?: $formMethod;

            if (array_key_exists($alias, Blade::getCustomDirectives())) {
                throw new Exception("Blade directive '{$alias}' is already registered.");
            }

            app('blade.compiler')->directive($alias, function ($parameters) use ($formMethod) {
                $parameters = trim($parameters, "()");

                return "<?= app('form')->{$formMethod}({$parameters}) ?>";
            });
        }
    */
}
