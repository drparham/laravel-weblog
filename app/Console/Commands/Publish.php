<?php namespace GeneaLabs\LaravelWeblog\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Contracts\Console\Kernel;
use GeneaLabs\LaravelWeblog\Providers\LaravelWeblog;

class Publish extends Command
{
    protected $signature = 'weblog:publish {--config} {--views} {--assets}';
    protected $description = 'Publish various assets of the weblog package for customization.';

    public function handle()
    {
        if ($this->option('assets')) {
            $this->call('vendor:publish', [
                '--provider' => LaravelWeblog::class,
                '--tag' => ['assets'],
                '--force' => true,
            ]);
        }

        if ($this->option('config')) {
            $this->call('vendor:publish', [
                '--provider' => LaravelWeblog::class,
                '--tag' => ['config'],
            ]);
        }

        if ($this->option('views')) {
            app(Kernel::class)->call('vendor:publish', [
                '--provider' => LaravelWeblog::class,
                '--tag' => 'views',
            ]);
        }
    }
}
