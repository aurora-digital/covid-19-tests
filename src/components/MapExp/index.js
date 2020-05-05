import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./index.module.css";

const MapExp = () => {
  const coords = {
    lat: 41.55,
    lng: -8.424,
    zoom: 13,
  };

  if (typeof window !== "undefined") {
    return (
      <Map
        center={[coords.lat, coords.lng]}
        zoom={coords.zoom}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={[coords.lat, coords.lng]}>
          <Popup>A custom popup.</Popup>
        </Marker>
      </Map>
    );
  }

  return null;
};

export default MapExp;
