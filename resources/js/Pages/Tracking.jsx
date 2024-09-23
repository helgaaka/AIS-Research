import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const Tracking = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const fetchTrackingData = () => {//Memanggil api dari routes api > Controller
            axios.get('/api/tracking-data')//url api
                .then(response => {
                    setDevices(response.data);
                })
                .catch(error => {
                    console.error("Error fetching tracking data:", error);
                });
        };
        //Fungsi Real Time
        fetchTrackingData();

        // Interval 5 Detik Untuk Memperbarui Data
        const interval = setInterval(fetchTrackingData, 5000);

        // Membersihkan interval ketika komponen di-unmount
        return () => clearInterval(interval);
    }, []); 

    return (
        <div>
            <h1>Prototype AIS</h1>
            <MapContainer center={[-6.200000, 106.816666]} zoom={12} style={{ height: "500px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {devices.map((device) => (
                    <Marker key={device.id} position={[device.latitude, device.longitude]}>
                        <Popup>
                            {device.device} <br /> Latitude: {device.latitude} <br /> Longitude: {device.longitude}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Tracking;
