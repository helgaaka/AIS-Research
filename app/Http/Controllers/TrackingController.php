<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TrackingController extends Controller
{
    public function getData()
    {
        // posisi static (Dermaga)
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
            ],
            [
                'id' => 3,
                'device' => 'Alat 3',
                'latitude' => '-5.400000',
                'longitude' => '108.900000',
            ]
        ];
        return response()->json($data);
    }

    // Fungsi untuk mendapatkan riwayat lokasi
public function getTrackingHistory()
{
    // Mengambil data riwayat dari database
    return Coordinate::orderBy('created_at', 'asc')->get(); // ambil nilai ascending
    
}

public function store(Request $request)
    {
        // fungsi store ke database
        $validatedData = $request->validate([
            'device_id' => 'required|integer',
            'latitude' => 'required|numeric|between:-90,90',
            'longitude' => 'required|numeric|between:-180,180',
        ]);

        $tracking = Coordinate::create([
            'device_id' => $validatedData['device_id'],
            'latitude' => $validatedData['latitude'],
            'longitude' => $validatedData['longitude'],
        ]);

        return response()->json(['message' => 'Data saved successfully', 'data' => $tracking], 201);
    }
}
