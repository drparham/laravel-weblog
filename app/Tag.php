<?php namespace GeneaLabs\LaravelWeblog;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tag extends Model
{
    public function posts() : BelongsToMany
    {
        return $this->belongsToMany(Post::class);
    }
}
