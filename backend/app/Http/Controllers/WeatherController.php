<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function getWeather(Request $request)
    {
        // Get the city from the query parameter, defaulting to 'London'
        $city = $request->query('city', 'London');
        
        // Fetch the API key from the .env file
        $apiKey = env('OPENWEATHER_API_KEY');
        
        // Make a request to the OpenWeather API
        $response = Http::get("https://api.openweathermap.org/data/2.5/weather", [
            'q' => $city,
            'appid' => $apiKey,
            'units' => 'metric', // To get temperature in Celsius
        ]);

        // Return the JSON response to the frontend
        return response()->json($response->json());
    }
}
