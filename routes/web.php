<?php

use App\Http\Controllers\HomePageController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/getIPInfo', [HomePageController::class, 'getIPInfo']);
Route::post('/getSearchData', [HomePageController::class, 'getSearchData']);
Route::post('/postSearch', [HomePageController::class, 'postSearch']);
