<?php namespace GeneaLabs\LaravelWeblog;

use Conner\Tagging\Taggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Collection;

class Post extends Model
{
    use SoftDeletes;
    use Taggable;

    protected $appends = [
        'readTime',
    ];

    protected $dates = [
        'deleted_at',
        'published_at',
    ];

    protected $fillable = [
        'title',
        'slug',
        'exerpt',
        'content',
        'featured_media',
        'category',
    ];

    public function author() : BelongsTo
    {
        $userClass = config('vendor.genealabs.laravel-weblog.user-model');
        $userPrimaryKey = (new $userClass())->getKey();

        return $this->belongsTo($userClass, 'author_user_id', $userPrimaryKey);
    }

    public function getAllCategoriesAttribute() : Collection
    {
        $categories = $this->select('category')->distinct()->get();

        // dd($categories);

        return $categories;
    }

    public function getExcerptAttribute() : string
    {
        $content = $this->content;
        $words = explode(' ', $content);
        $excerpt = implode(' ', array_splice($words, 0, 50));
        $excerpt .= (str_word_count($content) > 50) ? '&#8230;' : '';

        return $this->excerpt ?? $excerpt;
    }

    public function getReadTimeAttribute() : string
    {
        $wordCount = str_word_count(strip_tags($this->content));

        return round($wordCount / 245);
    }
}
