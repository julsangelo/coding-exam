<?php

namespace App\Http\Repositories;

use App\Models\IPAddress;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class IPInfo
{
    public function getIPInfo ($userID) 
    {
        $ipAddress = IPAddress::where('user_id',$userID )->value('ipAddress');

        $url = "https://ipinfo.io/{$ipAddress}/json?token=cba9598db52bf7";

        $ipInfo = Http::get($url);

        return $ipInfo->json();
    }
}
