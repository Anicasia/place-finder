import React from "react";
import "./Results.scss";

export default function Results({ results }) {
  const [toggleState, setState] = React.useState(false);
  const onChangeToggle = () => {
    setState(!toggleState);
  };
  return (
    <div className="results-container">
      <div className="switch-container">
        <p className="switch-title">Show Json Data:</p>
        <label className="switch">
          <input
            data-testid="switch"
            type="checkbox"
            onChange={onChangeToggle}
          ></input>
          <span className="slider round"></span>
        </label>
      </div>

      {toggleState === false &&
        results.features &&
        results?.features.map((properties) => {
          return (
            <div className="location-card" key={properties.id}>
              <p>
                Location Name:{" "}
                {properties.properties.name
                  ? properties.properties.name
                  : "Name Not Found"}
              </p>
            </div>
          );
        })}

      {toggleState === true && (
        <textarea
          className="json-field"
          readOnly
          value={JSON.stringify(results, undefined, 4)}
        ></textarea>
      )}
    </div>
  );
}
