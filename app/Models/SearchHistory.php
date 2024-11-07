<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SearchHistory extends Model
{
    protected $table = 'searchhistory';

    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'ipAddress',
    ];
}
