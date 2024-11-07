<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ipAddress', function (Blueprint $table) {
            $table->id()->primary();
            $table->foreignId('user_id')->nullable()->index()->unique();
            $table->string('ipAddress');
        });
    }
    
    public function down(): void
    {
        //
    }
};
