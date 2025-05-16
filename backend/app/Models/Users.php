<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Users extends Authenticatable
{
    protected $table = 'users';
    protected $primaryKey = 'user_id';
    protected $fillable = [
        'user_fname',
        'user_lname',
        'user_mname',
        'user_extension',
        'user_address',
        'email',
        'password',
        'user_is_cus',
        'user_is_adm',
        'user_is_active',
        'user_dob',
        'created_at'
    ];
    protected $hidden = [
        'password'
    ];
    public $timestamps = false;

}
