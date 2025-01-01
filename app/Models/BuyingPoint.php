<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BuyingPoint extends Model
{
    protected $table = 'buying_points';

    protected $fillable = [
        'user_id',
        'unique_buying_point_id',
        'recharge_amount',
        'points',        
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

}
