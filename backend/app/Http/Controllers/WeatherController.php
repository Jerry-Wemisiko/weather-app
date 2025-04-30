<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    public function getWeather(Request $request)
    {
        // Get the city from the request, default to 'Nairobi'
        $city = $request->query('city', 'Nairobi');
        
        // Your API key from the .env file
        $apiKey = env('WEATHER_API_KEY');
        
        // Construct the API URL with the city and API key
        $url = "http://api.weatherapi.com/v1/current.json?key={$apiKey}&q={$city}&aqi=no";
        
        // Make the API request to the weather API
        $response = Http::get($url);
        
        // If the request is successful, return the JSON data
        if ($response->successful()) {
            return response()->json($response->json());
        }

        // If the request fails, return an error message
        return response()->json(['error' => 'Unable to fetch weather data'], 500);
    }
}
