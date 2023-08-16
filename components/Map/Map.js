/** @format */
"use client";

import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import styles from "./Map.module.scss";

function Map({ lat, lng, zoom }) {
  const center = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  return (
    <GoogleMap zoom={zoom} center={center} mapContainerClassName={styles.map}>
      <MarkerF position={{ lat: lat, lng: lng }} />
    </GoogleMap>
  );
}

export default Map;
