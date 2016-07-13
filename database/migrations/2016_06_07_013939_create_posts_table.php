<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');

            $table->string('title');
            $table->string('slug');
            $table->string('category')->nullable();
            $table->text('excerpt')->nullable();
            $table->longText('content')->nullable();
            $table->longText('featured_media')->nullable();
            $table->timestamp('published_at')->nullable();

            $table->integer('author_user_id')->unsigned()->nullable();

            $table->foreign('author_user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->nullableTimestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::drop('posts');
    }
}
