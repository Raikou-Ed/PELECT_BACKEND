<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Users;
class UserController extends Controller
{
    public function getAllUsers(){
        $user = Users::all(); // this will return the list of users
        if($user){ // if naay user
            http_response_code(200);
            return response()->json(["message" => "Successfully get data", "data" => $user]);
        } else {
            http_response_code(400);
            return response()->json(["message" => "data not found"]);
        }
    }

    //kani to create users

    public function createUsers(Request $request)
{
    // ✅ Validate input
    $validatedData = $request->validate([
        'user_fname' => 'required|string|max:60',
        'user_lname' => 'required|string|max:60',
        'user_mname' => 'nullable|string|max:60',
        'user_extension' => 'nullable|string|max:10',
        'user_address' => 'required|string|max:255',
        'email' => 'required|email|unique:users,email',
        'password' => 'required|string|min:6',
        'user_is_cus' => 'required|boolean',
        'user_is_adm' => 'required|boolean',
        'user_is_active' => 'required|boolean',
        'user_dob' => 'required|date'
    ]);

    // ✅ Create user
    $user = Users::create([
        ...$validatedData,
        'password' => Hash::make($request->password),
        'created_at' => now()
    ]);

    return response()->json([
        'message' => 'User successfully created.',
        'data' => $user
    ], 201);
    }
    public function login(Request $request){
        $credentials = $request->validate([
            "email" => 'required|email',
            "password" => 'required|string|min:0'
        ]);
        if(Auth::attempt($credentials)){
            $user = Auth::user();
            return response()->json(["message" => "Login successfully", "data" => $user],200);
        }else{
            return response()->json(["message" => "Invalid credentials"],400);
        }
    }

}
