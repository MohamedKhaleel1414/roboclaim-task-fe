import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import TradeRoute from "./TradeRoute";

const RenderMap = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
};

function Map({ routes }) {
  const [lines, setLines] = useState([]);
  useEffect(() => {
    setLines(routes);
  }, [routes]);
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {lines.length > 0 && (
        <>
          {lines?.map((item, index) => {
            return <TradeRoute line={item} index={index} />;
          })}
        </>
      )}
      <RenderMap lat={0} lng={0} />
    </MapContainer>
  );
}

export default Map;
