<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Review;

class UserDashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        $bookings = Booking::where('user_id', $user->id)->get();
        $reviews = Review::where('user_id', $user->id)->get();
        $upcoming = $bookings->filter(fn($b) => in_array($b->status, ['pending', 'accepted']));

        return response()->json([
            'user' => $user->only(['name', 'email', 'location']),
            'bookingCount' => $bookings->count(),
            'upcoming' => $upcoming->values(),
            'reviews' => $reviews,
        ]);
    }
}
