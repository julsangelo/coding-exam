<?php

namespace Database\Seeders;

use App\Models\IPAddress;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'Test User',
            'email' => 'testuser@gmail.com',
            'password' => Hash::make('password123'),
        ]);

        IPAddress::create([
            'user_id' => 1,
            'ipAddress' => '122.2.73.37'
        ]);
    }
}

