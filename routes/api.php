<?php

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/users', function (Request $request) {
    $users = User::all();
    return response()->json([
        'users' => $users
    ]);
})->middleware('auth:sanctum');





Route::prefix('auth')->group(function () {
    Route::post('/register', [RegisterController::class, 'register']);
    Route::post('/login', [LoginController::class, 'login']);
});

Route::middleware(['auth:sanctum'])->group(function(){
    Route::post('/auth/logout', [LogoutController::class, 'logout']);
});



