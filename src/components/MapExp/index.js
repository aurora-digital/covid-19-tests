import React, { useState, useRef } from "react";
import MapGL, { Marker, GeolocateControl } from "react-map-gl";
import PropTypes from "prop-types";
import { map } from "lodash";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

const MapExp = ({ locations }) => {
  const [viewport, setViewport] = useState({
    latitude: 39.5887387,
    longitude: -8.4964864,
    zoom: 6,
    bearing: 0,
    pitch: 0,
  });
  const mapgl = useRef();

  const geolocateStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 10,
  };

  const renderMarkers = () => {
    if (!locations) {
      return null;
    }

    return map(locations, (location, index) => {
      return (
        <Marker key={index} latitude={location.lat} longitude={location.lng}>
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
      );
    });
  };

  return (
    <div>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(view) => setViewport(view)}
        mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
        ref={mapgl}
      >
        {renderMarkers()}
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation
        />
      </MapGL>
    </div>
  );
};

MapExp.propTypes = {
  locations: PropTypes.shape({}),
};

MapExp.defaultProps = {
  locations: null,
};

export default MapExp;
