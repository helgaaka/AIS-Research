import React, { useEffect, useState } from 'react';
import { fetchDockData, fetchTrackingHistory} from './Api/ApiMap';
import { Polyline } from 'react-leaflet';
import DockMarker from './MarkerMap/DockMarker';
import ShipMarker from './MarkerMap/ShipMarker';
import NavigationLinks from './NavigationLinks';
import Map from './Map';

const Tracking = () => {
    const [dock, setDock] = useState([]);
    const [deviceData, setDeviceData] = useState({});

    useEffect(() => {
        const loadDockData = async () => {
            const dockData = await fetchDockData();
            setDock(dockData);
        };

        const loadTrackingHistory = async () => {
            const historyData = await fetchTrackingHistory();
            const devices = {};
            historyData.forEach((location) => {
                const { device_id } = location;

                if (!devices[device_id]) {
                    devices[device_id] = { history: [], currentPosition: null };
                }

                devices[device_id].currentPosition = location;
                devices[device_id].history.push([location.latitude, location.longitude]);
            });

            setDeviceData(devices);
        };

        loadDockData();
        loadTrackingHistory();
        const interval = setInterval(loadTrackingHistory, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Prototipe AIS dan Rute</h1>
            <NavigationLinks />
            <div style={{ height: "500px", width: "100%", borderRadius: '10px', overflow: 'hidden' }}>
                <Map>
                    {dock.map(dockLocation => <DockMarker key={dockLocation.id} dockLocation={dockLocation} />)}
                    {Object.keys(deviceData).map(deviceId => {
                        const device = deviceData[deviceId];
                        return (
                            <React.Fragment key={deviceId}>
                                {device.history.length > 0 && (
                                    <Polyline positions={device.history} color="blue" />
                                )}
                                {device.currentPosition && (
                                    <ShipMarker deviceId={deviceId} position={device.currentPosition} />
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
