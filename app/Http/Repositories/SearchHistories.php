<?php

namespace App\Http\Repositories;

use App\Models\SearchHistory;
use Illuminate\Support\Facades\Http;

class SearchHistories
{
    public function getSearchHistory($userID)
    {
        $searchHistory = SearchHistory::where('user_id', $userID)->pluck('ipAddress');

        $ipInfoData = [];

        foreach ($searchHistory as $ipAddress) {
            $url = "https://ipinfo.io/{$ipAddress}/json?token=cba9598db52bf7";
            $ipInfo = Http::get($url);

            if ($ipInfo->successful()) {
                $data = $ipInfo->json();

                $ipInfoData[] = [
                    "ip" => $data['ip'] ?? $ipAddress,
                    "hostname" => $data['hostname'] ?? null,
                    "city" => $data['city'] ?? null,
                    "region" => $data['region'] ?? null,
                    "country" => $data['country'] ?? null,
                    "loc" => $data['loc'] ?? null,
                    "org" => $data['org'] ?? null,
                    "postal" => $data['postal'] ?? null,
                    "timezone" => $data['timezone'] ?? null,
                ];
            } else {
                $ipInfoData[] = [
                    "ip" => $ipAddress,
                    "hostname" => null,
                    "city" => null,
                    "region" => null,
                    "country" => null,
                    "loc" => null,
                    "org" => null,
                    "postal" => null,
                    "timezone" => null,
                ];
            }
        }

        return $ipInfoData;
    }
}
