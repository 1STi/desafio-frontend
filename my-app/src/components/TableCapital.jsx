import React from "react";
import CapitaCard from "./CapitalCard";

// import { Container } from './styles';

function TableCapital() {
  return (
    <>
      <div className="container-table">
        <div className="temperature">
          <p>Min</p>
          <p>Max</p>
        </div>
        <div className="city">
          <CapitaCard city="Brasilia" min="10" max="20" />
        </div>
      </div>
    </>
  );
}

export default TableCapital;
