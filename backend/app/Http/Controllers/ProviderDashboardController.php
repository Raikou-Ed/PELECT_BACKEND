<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Review;
use App\Models\Revenue;
use Illuminate\Support\Facades\Auth;

class ProviderDashboardController extends Controller
{
    public function index()
    {
        $provider = Auth::user();

        $bookings = Booking::where('provider_id', $provider->id)->get();
        $reviews = Review::where('provider_id', $provider->id)->get();
        $revenue = Revenue::where('provider_id', $provider->id)->sum('amount');

        return response()->json([
            'provider' => $provider,
            'bookings' => $bookings,
            'revenue' => $revenue,
            'reviews' => $reviews
        ]);
    }
}
