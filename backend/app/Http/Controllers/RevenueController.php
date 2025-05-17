<?php

namespace App\Http\Controllers;

use App\Models\Revenue;
use Illuminate\Http\Request;

class RevenueController extends Controller
{
    public function index()
    {
        return response()->json(Revenue::with('service')->get(), 200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'service_id' => 'required|exists:services,id',
            'amount' => 'required|numeric|min:0',
            'date' => 'required|date',
        ]);

        $revenue = Revenue::create($request->all());

        return response()->json($revenue, 201);
    }

    public function show($id)
    {
        $revenue = Revenue::with('service')->find($id);
        if (!$revenue) {
            return response()->json(['message' => 'Revenue not found'], 404);
        }

        return response()->json($revenue);
    }

    public function update(Request $request, $id)
    {
        $revenue = Revenue::find($id);
        if (!$revenue) {
            return response()->json(['message' => 'Revenue not found'], 404);
        }

        $revenue->update($request->all());

        return response()->json($revenue);
    }

    public function destroy($id)
    {
        $revenue = Revenue::find($id);
        if (!$revenue) {
            return response()->json(['message' => 'Revenue not found'], 404);
        }

        $revenue->delete();

        return response()->json(['message' => 'Revenue deleted']);
    }
}

