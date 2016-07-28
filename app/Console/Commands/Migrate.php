<?php namespace GeneaLabs\LaravelWeblog\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Contracts\Console\Kernel;

class Migrate extends Command
{
    protected $signature = 'weblog:migrate';
    protected $description = 'Run migrations for Laravel Weblog.';

    public function handle()
    {
        $this->comment('Run application migrations, just to make sure the default migrations have been run.');
        $this->call('migrate');
        $this->comment('Run Laravel Weblog migrations.');
        $this->call('migrate', [
            '--path' => 'vendor/genealabs/laravel-weblog/database/migrations',
        ]);
        $this->comment('Run Laravel Tagging migrations.');
        $this->call('migrate', [
            '--path' => 'vendor/rtconner/laravel-tagging/migrations',
        ]);
    }
}
