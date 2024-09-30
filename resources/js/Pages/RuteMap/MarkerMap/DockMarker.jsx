import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { dockIcon } from '../Icon/icon';

const DockMarker = ({ dockLocation }) => {
    return (
        <Marker
            Id={dockLocation.id}
            Name={dockLocation.device}
            position={[dockLocation.latitude, dockLocation.longitude]}
            icon={dockIcon}
        >
            <Popup>
                Nama: {dockLocation.device} <br />Dermaga: {dockLocation.id} <br /> Latitude: {dockLocation.latitude} <br /> Longitude: {dockLocation.longitude}
            </Popup>
        </Marker>
    );
};

export default DockMarker;
