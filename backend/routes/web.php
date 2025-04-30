<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test-error', function () {
    abort(404, 'This is a test error.');
});
