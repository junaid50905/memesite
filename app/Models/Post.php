<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';
    protected $fillable = [
        'user_id',
        'unique_post_id',
        'content',
        'image',
        'point_deduction'
    ];
    

    public function user(){
        return $this->belongsTo(User::class);
    }
}
