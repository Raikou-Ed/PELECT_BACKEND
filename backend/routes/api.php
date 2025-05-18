<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\RevenueController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\BookingHistoryController;


Route::get('/users', [UserController::class, 'getAllUsers']);
Route::post('/users', [UserController::class, 'createUsers']);
Route::post('/login', [UserController::class, 'login']);
Route::apiResource('services', ServiceController::class);
Route::apiResource('reviews', ReviewController::class);
Route::apiResource('revenues', RevenueController::class);
Route::apiResource('bookings', BookingController::class);
Route::apiResource('appointments', AppointmentController::class);
Route::apiResource('booking-histories', BookingHistoryController::class);
?>
