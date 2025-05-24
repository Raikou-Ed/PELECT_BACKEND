<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Review;
use Illuminate\Support\Facades\Auth;

class UserDashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $bookings = Booking::where('user_id', $user->id)->get();
        $reviews = Review::where('user_id', $user->id)->get();

        return response()->json([
            'user' => $user,
            'bookingCount' => $bookings->count(),
            'upcomingBookings' => $bookings->whereIn('status', ['pending', 'accepted']),
            'reviews' => $reviews
        ]);
    }
}
