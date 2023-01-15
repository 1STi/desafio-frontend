import React from "react";

// import { Container } from './styles';

function ContentWeather({
  id,
  cidade,
  estado,
  humidade,
  sensasacaoTermica,
  temMax,
  tempMin,
  vento,
}) {
  return (
    <>
      <div className="container-content-weather">
        <div className="local">
          <h2>
            {cidade}, {estado} - Brasil
          </h2>
          <div className="temp">
            <p>{temMax - 3}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentWeather;
