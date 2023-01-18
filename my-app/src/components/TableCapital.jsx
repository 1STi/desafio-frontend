import React from "react";
import CapitalCard from "./CapitalCard";
import "../styles/TableCapital.css";

function TableCapital({ cities }) {
  if (!cities.length) {
    return <p>Carregando...</p>; // TODO: Make this a spinner.
  }

  return (
    <>
      <div className="container-table">
        <div className="temperature">
          <p>Min</p>
          <p>Max</p>
        </div>
        <div className="city">
          .
          {cities.map((city, id) => (
            <CapitalCard
              key={id}
              city={city.cidade}
              min={city.temperaturaMax}
              max={city.temperaturaMin}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default TableCapital;
