import React from'react';
import { MapContainer, TileLayer, Marker, Popup } from'react-leaflet';

function Map() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{height: '100vh', width: '100vw'}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          <span>A popup!</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;