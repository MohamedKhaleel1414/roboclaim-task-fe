import React, {useContext} from "react";
import { DataContext } from "../context/data-context";

function Form() {
  const { setYear, setYearType, searchRoutes, year } = useContext(DataContext)
  return (
    <div className="form-section">
      <h3>Select Year To See Synchronized Trade Routes</h3>
      <div className="form">
        <div className="inputs">
          <label htmlFor="year-selector">Year</label>
          <input
            id="year-selector"
            type="number"
            max={2000}
            min={1}
            style={{ height: "20px", width: "100%" }}
            value={year}
            onChange={(e)=>{
              setYear(Number(e.target.value))
            }}
          />
        </div>
        <div className="inputs">
          <label htmlFor="year-type">Year</label>
          <select id="year-type" style={{ height: "25px", width: "100%" }} onChange={(e)=>{
            setYearType(e.target.value)
          }}>
            <option value="BCE">BCE</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <div className="btn">
          <button onClick={searchRoutes}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
