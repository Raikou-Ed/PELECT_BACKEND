<?php

namespace App\Http\Controllers;

use App\Models\BookingHistory;
use Illuminate\Http\Request;

class BookingHistoryController extends Controller
{
    public function index()
    {
        return response()->json(BookingHistory::with('booking')->get());
    }

    public function store(Request $request)
    {
        $request->validate([
            'booking_id' => 'required|exists:bookings,id',
            'action' => 'required|string',
            'description' => 'nullable|string',
            'performed_by' => 'nullable|integer',
        ]);

        $history = BookingHistory::create($request->all());

        return response()->json($history, 201);
    }

    public function show($id)
    {
        $history = BookingHistory::with('booking')->find($id);

        if (!$history) {
            return response()->json(['message' => 'Booking history not found'], 404);
        }

        return response()->json($history);
    }

    public function destroy($id)
    {
        $history = BookingHistory::find($id);

        if (!$history) {
            return response()->json(['message' => 'Booking history not found'], 404);
        }

        $history->delete();

        return response()->json(['message' => 'History deleted']);
    }
}
