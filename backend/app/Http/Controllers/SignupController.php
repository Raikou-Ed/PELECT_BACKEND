<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users; 
use Illuminate\Support\Facades\Log;

class SignupController extends Controller
{
    public function register(Request $request)
    {
        try {
            // Validate input data
            $validated = $request->validate([
                'user_fname' => 'required|string|max:255',
                'user_lname' => 'required|string|max:255',
                'phone' => 'required|string|max:20|unique:users,phone',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:6',
                'user_address' => 'nullable|string|max:255',
                'user_is_cus' => 'boolean',
                'user_is_adm' => 'boolean',
                'user_is_worker' => 'boolean',
                'user_is_active' => 'boolean',
                'user_dob' => 'nullable|date',
            ]);
           

            // Create the user 
        $user = Users::create([
            'user_fname' => $validated['user_fname'],
            'user_lname' => $validated['user_lname'],
            'phone' => $validated['phone'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
            'user_address' => $validated['user_address'] ?? '',
            'user_is_cus' => $validated['user_is_cus'] ?? true,
            'user_is_adm' => $validated['user_is_adm'] ?? false,
            'user_is_worker' => $validated['user_is_worker'] ?? false,
            'user_is_active' => $validated['user_is_active'] ?? true,
            'user_dob' => $validated['user_dob'] ?? null,
            
        ]);
                

            return response()->json([
                'message' => 'User created successfully',
                'data' => $user
            ], 201);

        } catch (\Exception $e) {
            Log::error('Registration failed', ['error' => $e->getMessage()]);
            return response()->json([
                'message' => 'Server error: ' . $e->getMessage()
            ], 500);
        }
    }
}
