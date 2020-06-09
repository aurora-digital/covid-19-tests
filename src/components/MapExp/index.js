import React, { useEffect, useState } from "react";

function MapExp() {
  const coords = {
    lat: 41.55,
    lng: -8.424,
    zoom: 13,
  };
  const [leafletData, setLeafletData] = useState(null);

  useEffect(() => {
    import("react-leaflet").then((data) => {
      setLeafletData(data);
    });
  }, []);

  if (!leafletData) {
    return null;
  }

  const { Marker, MapContainer, Popup, TileLayer } = leafletData;

  return (
    <MapContainer
      style={{ height: "400px", width: "100%" }}
      center={[coords.lat, coords.lng]}
      zoom={coords.zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coords.lat, coords.lng]}>
        <Popup>A pretty CSS3 popup.</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapExp;
