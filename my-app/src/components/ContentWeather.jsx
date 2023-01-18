import React from "react";

import "../styles/ContentWeather.css";

function ContentWeather({
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
            <p>{temMax - 3}°C Nublado</p>
          </div>

          <div className="container__info">
            <div className="container__info__valuesTemp">
              <div className="__info_valuesTemp">
                <p>I</p>
                <p>{tempMin}°</p>
                <p>I</p>
                <p>{temMax}°</p>
              </div>

              <div className="__info__vento">
                <p>Vento</p>
                <p>{vento}km/h</p>
              </div>

              <div className="__info__sensacao">
                <p>Sensação</p>
                <p>{sensasacaoTermica}°C</p>
              </div>

              <div className="__info__humidade">
                <p>Humidade</p>
                <p>{humidade}%</p>
              </div>
            </div>
          </div>

          <div className="container__week">
            <div className="container__week__day">
              <p>Segunda</p>
              <div className="container__week__day__info">
                <p>20°</p>
                <p>30°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentWeather;
