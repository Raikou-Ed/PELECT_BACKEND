<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'booking_id',
        'action',
        'description',
        'performed_by',
    ];

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }
}

