<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Users extends Authenticatable
{
    use HasFactory;

    protected $table = 'users'; 

    protected $fillable = [
        'user_fname',
        'user_lname',
        'phone',
        'email',
        'password',
        'user_address',
        'user_is_cus',
        'user_is_adm',
        'user_is_worker',
        'user_is_active',
        'user_dob',
    ];

    protected $hidden = [
        'password',
    ];
}
