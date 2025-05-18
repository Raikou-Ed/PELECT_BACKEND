<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{

    public function histories()
    {
        return $this->hasMany(BookingHistory::class);
    }


    public function appointment()
    {
        return $this->hasOne(Appointment::class);
    }


    use HasFactory;

    protected $fillable = [
        'user_id',
        'service_id',
        'booking_date',
        'status',
        'total_price',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}

