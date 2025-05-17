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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('user_fname');
            $table->string('user_lname');
            $table->string('user_mname')->nullable();
            $table->string('user_extension')->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->boolean('user_is_adm');
            $table->boolean('user_is_cus');
            $table->date('user_dob');
            $table->string('user_address', 250);
            $table->timestamp('created_at')->nullable();
            $table->boolean('user_is_active')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
