import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { cargoShipIcon } from '../Icon/icon';

const ShipMarker = ({ deviceId, position }) => {
    return (
        <Marker
            position={[position.latitude, position.longitude]}
            icon={cargoShipIcon}
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
