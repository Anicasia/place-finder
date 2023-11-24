import React, { useState } from "react";
import "./Search.scss";
import convertOSMToGeoJSON from "./OSMtoGeoJSON";

export default function Search({ setResults }) {
  const [latMin, setLatMin] = useState("");
  const [latMax, setLatMax] = useState("");
  const [longMin, setLongMin] = useState("");
  const [longMax, setLongMax] = useState("");

  const handleClick = () => {
    if (latMax - latMin > 0.25 || longMax - longMax > 0.25) {
      alert("Min and Max values cannot be more than 0.25");
    } else {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      const location = await await fetch(
        `https://www.openstreetmap.org/api/0.6/map.json?bbox=${longMin},${latMin},${longMax},${latMax}`
      );
      const responseBody = await location.json();
      const GeoJSONOutput = convertOSMToGeoJSON(responseBody);
      const results = GeoJSONOutput;
      setResults(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="search-container">
        <div className="input-container">
          <div className="lat-container">
            <h5 className="lat-title">Latitude:</h5>
            <input
              type="text"
              className="latMin"
              placeholder="Enter Minimum Latitude"
              value={latMin}
              onChange={(event) => setLatMin(event.target.value)}
            />
            <input
              type="text"
              className="latMax"
              placeholder="Enter Maximum Latitude"
              value={latMax}
              onChange={(event) => setLatMax(event.target.value)}
            />
          </div>
          <div className="lon-container">
            <h5 className="lon-title">Longtitude:</h5>
            <input
              type="text"
              className="longMin"
              placeholder="Enter Minimum Longtitude"
              value={longMin}
              onChange={(event) => setLongMin(event.target.value)}
            />
            <input
              type="text"
              className="longMax"
              placeholder="Enter Maximum Longtitude"
              value={longMax}
              onChange={(event) => setLongMax(event.target.value)}
            />
          </div>
        </div>
        <button className="search" onClick={handleClick}>
          Get Location Results
        </button>
      </div>
    </>
  );
}
