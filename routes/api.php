<?php

use Illuminate\Http\Request;
use App\Http\Controllers\TrackingController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/tracking-data', [TrackingController::class, 'getData']);
Route::get('/tracking-history', [TrackingController::class, 'getTrackingHistory']);
Route::post('/tracking/store', [TrackingController::class, 'store']);