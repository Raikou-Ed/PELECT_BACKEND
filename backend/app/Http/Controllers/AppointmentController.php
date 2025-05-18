<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function index()
    {
        return response()->json(Appointment::with('booking')->get());
    }

    public function store(Request $request)
    {
        $request->validate([
            'booking_id' => 'required|exists:bookings,id',
            'appointment_datetime' => 'required|date',
            'status' => 'in:scheduled,rescheduled,completed,cancelled',
            'notes' => 'nullable|string',
        ]);

        $appointment = Appointment::create($request->all());

        return response()->json($appointment, 201);
    }

    public function show($id)
    {
        $appointment = Appointment::with('booking')->find($id);

        if (!$appointment) {
            return response()->json(['message' => 'Appointment not found'], 404);
        }

        return response()->json($appointment);
    }

    public function update(Request $request, $id)
    {
        $appointment = Appointment::find($id);

        if (!$appointment) {
            return response()->json(['message' => 'Appointment not found'], 404);
        }

        $request->validate([
            'appointment_datetime' => 'sometimes|date',
            'status' => 'sometimes|in:scheduled,rescheduled,completed,cancelled',
            'notes' => 'nullable|string',
        ]);

        $appointment->update($request->all());

        return response()->json($appointment);
    }

    public function destroy($id)
    {
        $appointment = Appointment::find($id);

        if (!$appointment) {
            return response()->json(['message' => 'Appointment not found'], 404);
        }

        $appointment->delete();

        return response()->json(['message' => 'Appointment deleted']);
    }
}

