import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { cargoShipIcon } from '../Icon/icon';

const ShipMarker = ({ deviceId, position, onClick }) => { // Tambahkan onClick sebagai prop
    return (
        <Marker
            position={[position.latitude, position.longitude]}
            icon={cargoShipIcon}
            eventHandlers={{
                click: onClick, // Tambahkan event klik di sini
            }}
        >
            <Popup>
                Posisi Kapal (ID: {deviceId}) <br />
                Latitude: {position.latitude} <br />
                Longitude: {position.longitude}
            </Popup>
        </Marker>
    );
};

export default ShipMarker;
