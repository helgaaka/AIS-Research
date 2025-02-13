import React, { useEffect, useState } from 'react';
import { fetchDockData, fetchTrackingHistory } from './Api/ApiMap';
import { Polyline, Tooltip, Marker } from 'react-leaflet';
import DockMarker from './MarkerMap/DockMarker';
import ShipMarker from './MarkerMap/ShipMarker';
import { dotShipIcon } from './Icon/icon';
import NavigationLinks from './NavigationLinks';
import Map from './Map';

const Tracking = () => {
    const [dock, setDock] = useState([]);
    const [deviceData, setDeviceData] = useState({});
    const [selectedDeviceId, setSelectedDeviceId] = useState(null); // State untuk kapal yang dipilih

    useEffect(() => {
        const loadDockData = async () => {
            try {
                const dockData = await fetchDockData();
                setDock(dockData);
            } catch (error) {
                console.error("Error fetching dock data:", error);
            }
        };

        const loadTrackingHistory = async () => {
            try {
                const historyData = await fetchTrackingHistory();
                const devices = {};

                Object.entries(historyData).forEach(([device_id, locations]) => {
                    if (locations && locations.length > 0) {
                        devices[device_id] = {
                            history: locations.map(location => [location.latitude, location.longitude]),
                            currentPosition: locations[locations.length - 1]
                        };
                    }
                });

                setDeviceData(devices);
            } catch (error) {
                console.error("Error fetching tracking history:", error);
            }
        };

        loadDockData();
        loadTrackingHistory();
        const interval = setInterval(loadTrackingHistory, 5000);
        return () => clearInterval(interval);
    }, []);

    // Fungsi untuk menangani klik pada kapal
    const handleShipClick = (deviceId) => {
        setSelectedDeviceId(deviceId === selectedDeviceId ? null : deviceId); // Toggle rute kapal
    };

    return (
        <div>
            <h1>Prototipe AIS dan Rute</h1>
            <NavigationLinks />
            <div style={{ height: "500px", width: "100%", borderRadius: '10px', overflow: 'hidden' }}>
                <Map>
                    {dock.map(dockLocation => (
                        <DockMarker key={dockLocation.id} dockLocation={dockLocation} />
                    ))}
                    {Object.keys(deviceData).map(deviceId => {
                        const device = deviceData[deviceId];
                        const isSelected = deviceId === selectedDeviceId; // Cek apakah kapal sedang dipilih

                        // Hanya tampilkan kapal yang sedang dipilih atau semua kapal jika tidak ada yang dipilih
                        if (selectedDeviceId && !isSelected) return null;

                        return (
                            <React.Fragment key={deviceId}>
                                {/* Menggunakan ShipMarker untuk posisi kapal saat ini */}
                                {device.currentPosition && (
                                    <ShipMarker 
                                        deviceId={deviceId} 
                                        position={device.currentPosition} 
                                        onClick={() => handleShipClick(deviceId)} // Event klik untuk menampilkan rute
                                    />
                                )}
                                {/* Polyline untuk menampilkan rute jika kapal dipilih */}
                                {isSelected && device.history.length > 0 && (
                                    <Polyline positions={device.history} color="blue">
                                        {/* Menambahkan Marker dengan dotShipIcon di setiap titik dalam rute */}
                                        {device.history.map((position, index) => (
                                            <Marker key={index} position={position} icon={dotShipIcon}>
                                                <Tooltip sticky>
                                                    <span>
                                                        Kapal ID: {deviceId}<br />
                                                        Latitude: {position[0]}<br />
                                                        Longitude: {position[1]}
                                                    </span>
                                                </Tooltip>
                                            </Marker>
                                        ))}
                                    </Polyline>
                                )}
                            </React.Fragment>
                        );
                    })}
                </Map>
            </div>
        </div>
    );
};

export default Tracking;
