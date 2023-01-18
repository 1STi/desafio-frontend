import React, { useEffect } from "react";
import "../styles/CapitalCard.css";
// import { Container } from './styles';

function CapitaCard({ city, max, min }) {
  return (
    <>
      <div className="capitalCard-container">
        <div className="info-temperature">
          <p>{min}°</p>
          <p>{max}°</p>
        </div>
        <div className="info-city">
          <p>{city}</p>
        </div>
      </div>
    </>
  );
}

export default CapitaCard;
