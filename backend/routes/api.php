<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;

// Define the weather API endpoint
Route::get('/weather', [WeatherController::class, 'getWeather']);
