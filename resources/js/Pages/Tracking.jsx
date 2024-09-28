import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';

// Icon dermaga
const dockIcon = new L.Icon({
    iconUrl: '/dock.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});

// Icon kapal
const cargoShipIcon = new L.Icon({
    iconUrl: '/ship.png',
    iconSize: [50, 50],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});

/*
// Icon history rute
const dotIcon = new L.Icon({
    iconUrl: '/dot.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -5],
});
*/
const Tracking = () => {
    // Statement menyimpan dan memperbarui lokasi
    const [dock, setDock] = useState([]); 
    const [history, setHistory] = useState([]);
    const [currentPosition, setCurrentPosition] = useState(null);

    useEffect(() => {
        const fetchDockData = () => {
            axios.get('/api/tracking-data')// Mengambil data dermaga
                .then(response => {
                    setDevices(response.data);// save ke state
                })
                .catch(error => {
                    console.error("Error fetching tracking data:", error);
                });
        };
        const fetchTrackingHistory = () => {
            axios.get('/api/tracking-history') // Mengambil data riwayat
                .then(response => {
                    const data = response.data;

                    if (data && data.length > 0) {
                        // Menyimpan posisi terakhir sebagai posisi kapal saat ini (real time tracking)
                        const latestPosition = data[data.length - 1];
                        setCurrentPosition(latestPosition);

                        // Menyimpan riwayat pergerakan semua data kecuali posisi terakhir yang digunakan sebagai history rute
                        setHistory(data.slice(0, data.length - 1));
                    } else {
                        // Jika data kosong, set currentPosition ke null
                        setCurrentPosition(null);
                        setHistory([]);
                    }
                })
                .catch(error => {
                    console.error("Error fetching tracking history:", error);
                });
        };

        // Memanggil data statis dermaga sekali di awal
        fetchDockData();

        // Memanggil data/fungsi pergerakan setiap 5 detik
        fetchTrackingHistory();
        const interval = setInterval(() => {
            fetchTrackingHistory();
        }, 5000);

        // Membersihkan interval ketika komponen di-unmount
        return () => clearInterval(interval);
    }, []); 

    // Array untuk koordinat history rute menggunakan Polyline
    const polylinePositions = history.map(location => [location.latitude, location.longitude]);
    return (
        <div>
            <h1>Prototype AIS And Route</h1>
            <MapContainer center={[-4.400000, 109.016666]} zoom={7} style={{ height: "500px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                
                {/* Icon untuk lokasi dermaga */}
                {dock && dock.length > 0 && dock.map((dockLocation) => (
                    <Marker
                        key={dockLocation.id}
                        position={[dockLocation.latitude, dockLocation.longitude]}
                        icon={dockIcon} //Panggil fungsi icon dermaga
                    >
                        <Popup>
                            Dermaga: {dockLocation.name} <br /> Latitude: {dockLocation.latitude} <br /> Longitude: {dockLocation.longitude}
                        </Popup>
                    </Marker>
                ))}

                {/* Polyline untuk riwayat rute kapal */}
                {polylinePositions.length > 0 && (
                    <Polyline positions={polylinePositions} color="blue" />
                )}

                {/* Icon untuk posisi kapal saat ini */}
                {currentPosition && (
                    <Marker
                        position={[currentPosition.latitude, currentPosition.longitude]}
                        icon={cargoShipIcon}
                    >
                        <Popup>
                            Posisi Kapal Saat Ini <br /> Latitude: {currentPosition.latitude} <br /> Longitude: {currentPosition.longitude}
                        </Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
};

export default Tracking;
