<?php namespace GeneaLabs\LaravelWeblog\Providers;

use GeneaLabs\LaravelWeblog\Console\Commands\Migrate;
use GeneaLabs\LaravelWeblog\Console\Commands\Publish;
use Illuminate\Support\ServiceProvider;

class LaravelWeblog extends ServiceProvider
{
    protected $defer = false;

    public function boot()
    {
        include __DIR__ . '/../Http/routes.php';

        $this->publishes([
            __DIR__ . '/../../public/build' => public_path('vendor/genealabs/laravel-weblog'),
        ], 'assets');

        $this->publishes([
            __DIR__ . '/../../config/laravel-weblog.php' => config_path('vendor/genealabs/laravel-weblog.php'),
        ], 'config');

        $this->publishes([
            __DIR__ . '/../../resources/views' => base_path('resources/views/vendor/genealabs/laravel-weblog/'),
        ], 'views');

        $this->loadViewsFrom(__DIR__ . '/../../resources/views', 'genealabs-laravel-weblog');

        if (! config('vendor.genealabs.laravel-weblog.user-model')) {
            throw new Exception("You haven't specified a user model. Please add an entry for 'model' or 'providers.users.model' in /config/auth.php. Alternatively you may publish the configuration file ('php artisan weblog:publish --config') and specify your user model there.");
        }

        // $this->registerBladeDirective('open', 'form');
    }

    public function register()
    {
        $this->commands(Migrate::class);
        $this->commands(Publish::class);
        $this->mergeConfigFrom(__DIR__ . '/../../config/laravel-weblog.php', 'vendor.genealabs.laravel-weblog');
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
