<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\TrackingController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/tracking', function () {
    return Inertia::render('Tracking');
});
Route::get('/halaman1', function () {
    return Inertia::render('halaman1'); 
});
Route::get('/halaman2', function () {
    return Inertia::render('halaman2'); 
});

Route::post('/api/save-coordinates', [TrackingController::class, 'saveCoordinates']);
Route::get('/api/coordinates-history', [TrackingController::class, 'getCoordinatesHistory']);