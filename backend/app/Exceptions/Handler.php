<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;

class Handler extends ExceptionHandler
{
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    public function render($request, Exception $exception)
    {
        // Check for specific exception types and return useful info

        if ($exception instanceof ModelNotFoundException) {
            return response()->json(['error' => 'Resource not found'], 404);
        }

        if ($exception instanceof ValidationException) {
            return response()->json([
                'error' => 'Validation failed',
                'details' => $exception->errors()
            ], 422);
        }

        // Handle other generic exceptions
        return response()->json([
            'error' => 'Something went wrong',
            'message' => $exception->getMessage(),
            'trace' => $exception->getTraceAsString()
        ], 500);
    }
}

