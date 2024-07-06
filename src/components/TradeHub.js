import React, { useContext } from "react";
import Form from "./Form";
import { DataContext } from "../context/data-context";

function TradeHub() {
  const { route } = useContext(DataContext);
  return (
    <div className="info-section">
      <Form />
      <div className="info">
        {route.length > 0 && (
          <>
            {route.map((item, index) => {
              return (
                <div style={{ marginBottom: "50px" }}>
                  <h3>
                    {index + 1}- {item.name}
                  </h3>
                  <p>{item.description}</p>
                  <p>
                    <span style={{ fontWeight: "600" }}>Period: </span>{" "}
                    {item.period[0] < 0
                      ? `${item.period[0] * -1} BCE `
                      : `${item.period[0]} CE `}{" "}
                    -{" "}
                    {item.period[1] < 0
                      ? `${item.period[1] * -1} BCE `
                      : `${item.period[1]} CE `}
                  </p>
                  <p>
                    <span style={{ fontWeight: "600" }}>Major Stops: </span>{" "}
                    {item.majorStops.map((stop, idx) => {
                      return <span key={idx}>{stop.name} - </span>;
                    })}
                  </p>
                  <p>
                    <span style={{ fontWeight: "600" }}>Goods: </span>{" "}
                    {item.majorStops.map((stop, idx) => {
                      return (
                        <div key={idx}>
                          {stop.goods.map((box, id) => {
                            return <span>{box}, </span>;
                          })}
                        </div>
                      );
                    })}
                  </p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default TradeHub;
