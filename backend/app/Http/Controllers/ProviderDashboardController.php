<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
use App\Models\Review;

class ProviderDashboardController extends Controller
{
    public function index(Request $request)
    {
        $provider = $request->user();

        $jobs = Booking::where('provider_id', $provider->id)->get();
        $reviews = Review::where('provider_id', $provider->id)->get();
        $upcomingJobs = $jobs->filter(fn($job) => in_array($job->status, ['pending', 'accepted']));

        return response()->json([
            'provider' => $provider->only(['name', 'email', 'service_type']),
            'jobCount' => $jobs->count(),
            'upcomingJobs' => $upcomingJobs->values(),
            'reviews' => $reviews,
        ]);
    }
}

