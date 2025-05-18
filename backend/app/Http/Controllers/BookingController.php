<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        return response()->json(Booking::with(['user', 'service'])->get());
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'service_id' => 'required|exists:services,id',
            'booking_date' => 'required|date',
            'total_price' => 'nullable|numeric|min:0',
        ]);

        $booking = Booking::create([
            'user_id' => $request->user_id,
            'service_id' => $request->service_id,
            'booking_date' => $request->booking_date,
            'status' => 'pending',
            'total_price' => $request->total_price,
        ]);

        return response()->json($booking, 201);
    }

    public function show($id)
    {
        $booking = Booking::with(['user', 'service'])->find($id);

        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        return response()->json($booking);
    }

    public function update(Request $request, $id)
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        $request->validate([
            'booking_date' => 'sometimes|date',
            'status' => 'sometimes|in:pending,confirmed,completed,cancelled',
            'total_price' => 'nullable|numeric|min:0',
        ]);

        $booking->update($request->all());

        return response()->json($booking);
    }

    public function destroy($id)
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json(['message' => 'Booking not found'], 404);
        }

        $booking->delete();

        return response()->json(['message' => 'Booking deleted']);
    }
}

