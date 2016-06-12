<?php namespace GeneaLabs\LaravelWeblog\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Contracts\Console\Kernel;

class Migrate extends Command
{
    protected $signature = 'weblog:migrate';
    protected $description = 'Run migrations for Laravel Weblog.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        app(Kernel::class)->call('migrate');
        app(Kernel::class)->call('migrate', [
            '--path' => 'vendor/genealabs/laravel-weblog/database/migrations',
        ]);
    }
}
