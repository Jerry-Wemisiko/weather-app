<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;

//Route::get('/weather', [WeatherController::class, 'getWeather']);



Route::get('/weather', 'WeatherController@show'); // Endpoint to get weather data

Route::post('/weather', 'WeatherController@store'); // Optional POST for sending weather info
