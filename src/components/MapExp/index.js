import React, { useState, useRef } from "react";
import MapGL, { Marker, GeolocateControl, Popup } from "react-map-gl";
import PropTypes from "prop-types";
import { map } from "lodash";
import Typography from "../Typography";
import { withTranslation } from "../../i18n";
import updateDimensions from "../../hooks/useWindowDimensions";

import styles from "./index.module.css";

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;
const SIZE = 20;
const breakpointMobile = 800;

/* eslint-disable id-length */
const MapExp = ({ locations, t }) => {
  const dimensions = updateDimensions();
  const [viewport, setViewport] = useState({
    latitude: 39.5887387,
    longitude: -8.4964864,
    zoom: 5.7,
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

  const getDrive = () => {
    if (popupInfo.drive === "Não tem") {
      return t("doesnthave");
    }

    if (popupInfo.drive === "Só em automóvel") {
      return t("car");
    }

    if (popupInfo.drive === "Em viatura ou a pé") {
      return t("walkorcar");
    }

    return popupInfo.drive;
  };

  const getReservation = () => {
    if (popupInfo.reservation === "Obrigatória") {
      return t("required");
    }

    if (popupInfo.reservation === "Inexistente") {
      return t("nonexistent");
    }

    if (popupInfo.reservation === "Opcional") {
      return t("optional");
    }

    return popupInfo.reservation;
  };

  const renderPopup = () => {
    if (!popupInfo) {
      return null;
    }

    return (
      <Popup
        tipSize={8}
        latitude={popupInfo.coords[0]}
        longitude={popupInfo.coords[1]}
        closeOnClick={false}
        onClose={() => setPopupInfo(null)}
        className={styles.popup}
      >
        <div>
          <div className={styles.title}>
            <Typography color="oxford-blue" variant="body">
              {popupInfo.name}
            </Typography>
          </div>
          <div className={styles.detail}>
            <Typography weight="bold" color="oxford-blue">
              {t("address")}
            </Typography>
            <Typography color="oxford-blue">{popupInfo.address}</Typography>
          </div>
          <div className={styles.detail}>
            <Typography weight="bold" color="oxford-blue">
              {t("coverage")}
            </Typography>
            <Typography color="oxford-blue">{popupInfo.ars}</Typography>
          </div>
          <div className={styles.detail}>
            <Typography weight="bold" color="oxford-blue">
              {t("acesCoverage")}
            </Typography>
            <Typography color="oxford-blue">{popupInfo.aces}</Typography>
          </div>
          <div className={styles.detail}>
            <Typography weight="bold" color="oxford-blue">
              {t("phone")}
            </Typography>
            <Typography color="oxford-blue">{popupInfo.phone}</Typography>
          </div>
          {popupInfo.email ? (
            <div className={styles.detail}>
              <Typography weight="bold" color="oxford-blue">
                Email:
              </Typography>
              <Typography color="oxford-blue">{popupInfo.email}</Typography>
            </div>
          ) : null}
          <div className={styles.detail}>
            <Typography weight="bold" color="oxford-blue">
              {t("schedule")}
            </Typography>
            <Typography color="oxford-blue">{popupInfo.schedule}</Typography>
          </div>
          <div className={styles.detail}>
            <Typography weight="bold" color="oxford-blue">
              {t("pick")}
            </Typography>
            <Typography color="oxford-blue">
              {popupInfo.presencial === "Sim" ? t("yes") : t("no")}
            </Typography>
          </div>
          <div className={styles.detail}>
            <Typography weight="bold" color="oxford-blue">
              {t("home")}
            </Typography>
            <Typography color="oxford-blue">
              {popupInfo.domicile === "Sim" ? t("yes") : t("no")}
            </Typography>
          </div>
          <div className={styles.detail}>
            <Typography weight="bold" color="oxford-blue">
              {t("reservation")}
            </Typography>
            <Typography color="oxford-blue">{getReservation()}</Typography>
          </div>
          <div className={styles.detail}>
            <Typography weight="bold" color="oxford-blue">
              {t("drive")}
            </Typography>
            <Typography color="oxford-blue">{getDrive()}</Typography>
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
              fill: "#a0bdef",
              stroke: "#002fa7",
              strokeWidth: "0.5px",
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

  const renderMapElements = () => {
    return (
      <>
        {renderPopup()}
        {renderMarkers()}
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation
        />
      </>
    );
  };

  if (dimensions.width > breakpointMobile) {
    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/tania-covid19/ckbqldulc29sc1it9mqg45u5k"
        onViewportChange={(view) => setViewport(view)}
        mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
        ref={mapgl}
      >
        {renderMapElements()}
      </MapGL>
    );
  }

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/tania-covid19/ckbqldulc29sc1it9mqg45u5k"
      onViewportChange={(view) => setViewport(view)}
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      ref={mapgl}
      dragPan={false}
      touchAction="pan-y"
    >
      {renderMapElements()}
    </MapGL>
  );
};

MapExp.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation("map")(MapExp);
