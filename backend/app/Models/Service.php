<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Service extends Model
{
    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
    
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'user_id',
        'is_active',
    ];

    // Relation: A service belongs to a user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}


