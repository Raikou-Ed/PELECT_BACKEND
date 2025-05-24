<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\RevenueController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\BookingHistoryController;
use App\Http\Controllers\SignupController;
use App\Http\Controllers\UserDashboardController;
use App\Http\Controllers\ProviderDashboardController;
use App\Http\Controllers\AdminDashboardController;


Route::post('/register', [SignupController::class, 'register']);
Route::get('/users', [UserController::class, 'getAllUsers']);
Route::post('/users', [UserController::class, 'createUsers']);
Route::post('/login', [UserController::class, 'login']);
Route::apiResource('services', ServiceController::class);
Route::apiResource('reviews', ReviewController::class);
Route::apiResource('revenues', RevenueController::class);
Route::apiResource('bookings', BookingController::class);
Route::apiResource('appointments', AppointmentController::class);
Route::apiResource('booking-histories', BookingHistoryController::class);
Route::middleware(['auth:sanctum', 'role:user'])->get('/dashboard/user', [UserDashboardController::class, 'index']);
Route::middleware(['auth:sanctum', 'role:provider'])->get('/dashboard/provider', [ProviderDashboardController::class, 'index']);
Route::middleware(['auth:sanctum', 'role:admin'])->get('/dashboard/admin', [AdminDashboardController::class, 'index']);

?>
