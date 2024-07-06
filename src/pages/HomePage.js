import React, { useState } from "react";
import Map from "../components/MapComponent";
import axios from "axios";
import TradeHub from "../components/TradeHub";
import { DataContext } from "../context/data-context";

function HomePage() {
  const [routes, setRoutes] = useState([]);
  const [lines, setLines] = useState([]);
  const [year, setYear] = useState(0);
  const [yearType, setYearType] = useState("BCE");
  const [resultRoutes, setResultRoutes] = useState([])

  const searchRoutes = () => {
    let wantedYear = year
    if(yearType === "BCE"){
      wantedYear = wantedYear * -1
    }
    axios
      .post("http://localhost:4000/api/v1/trade-routes", {
        year: wantedYear,
      })
      .then((data) => {
        console.log(data);
        setRoutes(data.data);
        setResultRoutes(data.data)
        let shownLines = [];
        let stopsArray = [];
        for (let i = 0; i < data.data.length; i++) {
          for (let j = 0; j < data.data[i].majorStops.length; j++) {
            const coordinatesValues = Object.values(
              data.data[i].majorStops[j].coordinates
            );
            shownLines.push(coordinatesValues);
          }
          stopsArray.push(shownLines);
          shownLines = [];
        }
        setLines(stopsArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const chooseRoute = (index) => {
    const result = routes.filter((item, idx)=> {
      return index === idx
    })
    setResultRoutes(result)
  }

  return (
    <DataContext.Provider
      value={{
        year: year,
        yearType: yearType,
        searchRoutes: searchRoutes,
        route: resultRoutes,
        setYear: setYear,
        setYearType: setYearType,
        chooseRoute: chooseRoute,
      }}
    >
      <div className="home-page">
        <Map routes={lines} />
        <TradeHub />
      </div>
    </DataContext.Provider>
  );
}

export default HomePage;
