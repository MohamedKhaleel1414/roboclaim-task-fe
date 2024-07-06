import React, {useContext} from "react";
import { Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { DataContext } from "../context/data-context";

function TradeRoute({ line, index }) {
  const { chooseRoute } = useContext(DataContext)
  const colors = ["blue", "green", "red", "yellow", "orange", "purple", "cyan"];
  return (
    <div key={index}>
      <Polyline
        pathOptions={{ color: colors[index], weight: "2" }}
        positions={line} eventHandlers={{
          click: ()=>{
            console.log(index)
            chooseRoute(index)
          }
        }}
      />
      {line.map((position, idx) => {
        return (
          <Marker
            key={idx}
            position={[position[0], position[1]]}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [13, 20],
                iconAnchor: [7, 20],
              })
            }
          >
            <Popup>Hey</Popup>
          </Marker>
        );
      })}
    </div>
  );
}

export default TradeRoute;
