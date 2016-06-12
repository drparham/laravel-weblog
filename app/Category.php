<?php namespace GeneaLabs\LaravelWeblog;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    public function post() : HasOne
    {
        return $this->hasOne(Post::class);
    }
}
