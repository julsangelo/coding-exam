<?php

namespace App\Http\Controllers;

use App\Http\Repositories\IPInfo;
use App\Http\Repositories\SearchHistories;
use App\Models\SearchHistory;
use Illuminate\Http\Request;

class HomePageController extends Controller
{
    protected $ipInfo;
    protected $searchHistory;

    public function __construct(IPInfo $ipInfo, SearchHistories $searchHistory)
    {
        $this->ipInfo = $ipInfo;
        $this->searchHistory = $searchHistory;
    }

    public function getIPInfo (Request $request) 
    {
        $userID = $request->input('userID');

        $data = $this->ipInfo->getIPInfo($userID);

        return response()->json($data);
    }

    public function postSearch (Request $request)
    {
        SearchHistory::create([
            'user_id' => $request->userID,
            'ipAddress' => $request->ipAddress
        ]);
    }

    public function getSearchData(Request $request)
    {
        $userID = $request->input('userID');

        $data = $this->searchHistory->getSearchHistory($userID);

        return response()->json($data);
    }
}
