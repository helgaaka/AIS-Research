var latitude = -8.243263;
var longitude = 114.355531;
var map = L.map('map').setView([latitude, longitude], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var marker = L.marker([latitude, longitude]).addTo(map);
marker.bindPopup("<b>Koordinat : </b><br>Latitude : " + latitude + ", " + "Longitude : " + longitude).openPopup();

document.getElementById('latitude-value').innerText = latitude;
document.getElementById('longitude-value').innerText = longitude;