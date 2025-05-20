<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Booking;
use App\Models\Revenue;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $userCount = User::where('role', 'user')->count();
        $providerCount = User::where('role', 'provider')->count();
        $bookingCount = Booking::count();
        $totalRevenue = Revenue::sum('amount');

        return response()->json([
            'userCount' => $userCount,
            'providerCount' => $providerCount,
            'bookingCount' => $bookingCount,
            'totalRevenue' => $totalRevenue,
        ]);
    }
}

