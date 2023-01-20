import React from "react";
import CapitalCard from "./CapitalCard";
import "../styles/TableCapital.css";
import useMediaQuery from "../hooks/useMediaQuery";

function TableCapital({ cities }) {
  const matches = useMediaQuery("(min-width: 600px)");

  if (!cities.length) {
    return <p>Carregando...</p>; // TODO: Make this a spinner.
  }

  return (
    <div className="container-table">
      <div className="city">
        <div className="top-5">
          <div className="temperature">
            <p>Min</p>
            <p>Max</p>
          </div>
          {cities.slice(0, 5).map((city, id) => (
            <CapitalCard
              key={id}
              city={city.cidade}
              min={city.temperaturaMax}
              max={city.temperaturaMin}
            />
          ))}
        </div>
        <div className="top-10">
          {!matches ? null : (
            <div className="temperature">
              <p>Min</p>
              <p>Max</p>
            </div>
          )}
          {cities.slice(5).map((city, id) => (
            <CapitalCard
              key={id}
              city={city.cidade}
              min={city.temperaturaMax}
              max={city.temperaturaMin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableCapital;
