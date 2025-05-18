<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
        'booking_id',
        'appointment_datetime',
        'status',
        'notes',
    ];

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }
}

