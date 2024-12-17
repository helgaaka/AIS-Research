import L from 'leaflet';

// Ikon dermaga
export const dockIcon = new L.Icon({
    iconUrl: '/dock.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});

// Ikon kapal
export const cargoShipIcon = new L.Icon({
    iconUrl: '/ship.png',
    iconSize: [50, 50],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
});
