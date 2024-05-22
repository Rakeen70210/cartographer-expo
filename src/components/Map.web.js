import { MapContainer, TileLayer, Polyline, Marker, Popup } from'react-leaflet';

const Map = () => {
    return (
      <MapContainer center={[37.7749, -122.4194]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a>"
        />
        <Marker position={[51.505, -0.09]}>
        <Popup>
          <span>A popup!</span>
        </Popup>
      </Marker>
        {/* Add polylines for traveled roads */}
        {Object.keys(travelData).map((roadId) => (
          <Polyline
            key={roadId}
            positions={[/* coordinates for the road */]}
            color={travelData[roadId]? 'blue' : 'gray'}
            weight={5}
          />
        ))}
      </MapContainer>
    );
  };

  export default Map;