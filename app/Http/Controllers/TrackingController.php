<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TrackingController extends Controller
{
    public function getData()
    {
        // Api Dumy Untuk 2 alat
        $data = [
            [
                'id' => 1,
                'device' => 'Alat 1',
                'latitude' => '-6.200000',
                'longitude' => '106.816666',
            ],
            [
                'id' => 2,
                'device' => 'Alat 2',
                'latitude' => '-6.300000',
                'longitude' => '110.900000',
            ]
        ];
        return response()->json($data);
    }
}
