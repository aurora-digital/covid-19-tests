import React, { useState, useRef } from "react";
import MapGL, { Marker, GeolocateControl, Popup } from "react-map-gl";
import PropTypes from "prop-types";
import { map } from "lodash";
import Typography from "../Typography";

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
  const [popupInfo, setPopupInfo] = useState(null);

  const mapgl = useRef();

  const geolocateStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 10,
  };

  const handleClickLab = (location) => () => {
    setPopupInfo(location);
  };

  const renderPopup = () => {
    if (!popupInfo) {
      return null;
    }

    return (
      <Popup
        tipSize={5}
        anchor="top"
        latitude={popupInfo.coords[0]}
        longitude={popupInfo.coords[1]}
        closeOnClick={false}
        onClose={() => setPopupInfo(null)}
      >
        <div className="popup">
          <div className="detail">
            <Typography weight="bold" color="klein-blue">
              Nome do laboratório:
            </Typography>
            <Typography color="klein-blue">{popupInfo.name}</Typography>
          </div>
          <div className="detail">
            <Typography weight="bold" color="klein-blue">
              Morada:
            </Typography>
            <Typography color="klein-blue">{popupInfo.address}</Typography>
          </div>
          <div className="detail">
            <Typography weight="bold" color="klein-blue">
              ARS de Abrangência:
            </Typography>
            <Typography color="klein-blue">{popupInfo.ars}</Typography>
          </div>
          <div className="detail">
            <Typography weight="bold" color="klein-blue">
              ACES de Abrangência:
            </Typography>
            <Typography color="klein-blue">{popupInfo.aces}</Typography>
          </div>
          <div className="detail">
            <Typography weight="bold" color="klein-blue">
              Telefone:
            </Typography>
            <Typography color="klein-blue">{popupInfo.phone}</Typography>
          </div>
          <div className="detail">
            <Typography weight="bold" color="klein-blue">
              Email:
            </Typography>
            <Typography color="klein-blue">{popupInfo.email}</Typography>
          </div>
          <div className="detail">
            <Typography weight="bold" color="klein-blue">
              Horário:
            </Typography>
            <Typography color="klein-blue">{popupInfo.schedule}</Typography>
          </div>
          {popupInfo.presencial === "Sim" ? (
            <div className="detail">
              <Typography color="klein-blue">Recolha presencial </Typography>
            </div>
          ) : null}
          {popupInfo.domicile === "Sim" ? (
            <div className="detail">
              <Typography color="klein-blue">Faz domicílios </Typography>
            </div>
          ) : null}
          {popupInfo.reservation === "Obrigatória" ? (
            <div className="detail">
              <Typography color="klein-blue">Reserva obrigatória </Typography>
            </div>
          ) : null}
          <div className="detail">
            <Typography weight="bold" color="klein-blue">
              Drive through:
            </Typography>
            <Typography color="klein-blue">{popupInfo.drive}</Typography>
          </div>
        </div>
      </Popup>
    );
  };

  const renderMarkers = () => {
    if (!locations) {
      return null;
    }

    return map(locations, (location, index) => {
      if (!location) {
        return null;
      }

      return (
        <Marker
          key={index}
          latitude={location.coords[0]}
          longitude={location.coords[1]}
        >
          <svg
            height={SIZE}
            viewBox="0 0 24 24"
            style={{
              cursor: "pointer",
              fill: "#d00",
              stroke: "none",
              transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
            }}
            onClick={handleClickLab(location)}
          >
            <path d={ICON} />
          </svg>
        </Marker>
      );
    });
  };

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(view) => setViewport(view)}
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      ref={mapgl}
    >
      {renderMarkers()}
      {renderPopup()}
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation
      />
    </MapGL>
  );
};

MapExp.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default MapExp;
