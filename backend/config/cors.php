<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Laravel CORS Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for Cross-Origin Resource Sharing.
    | Laravel will respond with the proper CORS headers to allow or restrict
    | cross-origin requests.
    |
    */

    'supports_credentials' => false,

    'allowed_origins' => ['*'],
    'allowed_headers' => ['*'],
    'allowed_methods' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
];
