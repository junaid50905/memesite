<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class RegisterController extends Controller
{
    public function register(RegisterRequest $registerRequest){

        $remove_extra_space_username = preg_replace('/\s+/', ' ', trim($registerRequest->username));
        $username = ucwords(strtolower($remove_extra_space_username));

        $slug_username = strtolower(str_replace(' ', '-', $registerRequest->username));

        $user = User::create([
            'unique_id' => Str::uuid(),
            'username' => $username,
            'slug_username' => $slug_username,
            'email'    => $registerRequest->email,
            'password' => Hash::make($registerRequest->password),
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message'      => 'Registered successfully',
            'access_token' => $token,
            'token_type'   => 'Bearer'
        ], 201);
    }
}
