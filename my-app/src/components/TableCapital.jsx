import React from "react";
import CapitalCard from "./CapitalCard";
import "../styles/TableCapital.css";

function TableCapital({ cities }) {
  return (
    <>
      <div className="container-table">
        <div className="temperature">
          <p>Min</p>
          <p>Max</p>
        </div>
        <div className="city">
          {cities.map((city, id) => (
            <CapitalCard
              key={id}
              city={city.name}
              min={city.min}
              max={city.max}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TableCapital;
