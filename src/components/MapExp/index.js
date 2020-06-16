import React, { useState, useRef } from "react";
import MapGL, { Marker, GeolocateControl } from "react-map-gl";
import fetch from "node-fetch";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

const MapExp = ({ labs }) => {
  const [viewport, setViewport] = useState({
    latitude: 39.5887387,
    longitude: -8.4964864,
    zoom: 6,
    bearing: 0,
    pitch: 0,
  });
  const map = useRef();

  const geolocateStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 10,
  };

  console.log(labs);

  if (map.current) {
    console.log(map.current);
  }

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(view) => setViewport(view)}
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      ref={map}
    >
      <Marker latitude={41.5472535} longitude={-8.4816328}>
        <svg
          height={SIZE}
          viewBox="0 0 24 24"
          style={{
            cursor: "pointer",
            fill: "#d00",
            stroke: "none",
            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
          }}
        >
          <path d={ICON} />
        </svg>
      </Marker>
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation
      />
    </MapGL>
  );
};

export async function getStaticProps() {
  const list = [
    "Rua D. Moisés Alves de Pinho 4900-314 Viana do Castelo",
    "Avenida Dr. Tito Fontes, nº 31 4930-673 Valença",
    "Rua Dr. Félix Alves Pereira, nº 177 4970-456 Arcos de Valdevez",
  ];
  const mapboxApiUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?access_token=${process.env.MAPBOX_TOKEN}";

  const res = await fetch(mapboxApiUrl);

  const json = await res;
  console.log(json);

  return {
    props: {
      labs: json,
    },
  };
}

export default MapExp;
