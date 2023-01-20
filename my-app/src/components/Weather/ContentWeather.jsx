import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import "../../styles/ContentWeather.css";
import CardMin from "./CardMin";

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
          <div className="local__container">
            <h2>
              {cidade}, {estado} - Brasil
            </h2>
            <div className="temp">
              <p>{temMax - 3}°C Nublado</p>
            </div>

            <div className="container__info">
              <div className="container__info__valuesTemp">
                <div className="__info_valuesTemp">
                  <AiOutlineArrowDown style={{ color: "#f3c600" }} />
                  <p>{tempMin}°</p>
                  <AiOutlineArrowUp style={{ color: "#f3c600" }} />
                  <p>{temMax}°</p>
                </div>

                <div className="__info__vento">
                  <p className="__info_title">Vento</p>
                  <p className="info_data">{vento}km/h</p>
                </div>

                <div className="__info__sensacao">
                  <p className="__info_title">Sensação</p>
                  <p className="info_data">{sensasacaoTermica}°C</p>
                </div>

                <div className="__info__humidade">
                  <p className="__info_title">Humidade</p>
                  <p className="info_data">{humidade}%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container__week">
            <CardMin name="Segunda" max="30" min="20" />
            <CardMin name="Terça" max="30" min="20" />
            <CardMin name="Quarta" max="30" min="20" />
            <CardMin name="Quinta" max="30" min="20" />
            <CardMin name="Sexta" max="30" min="20" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentWeather;
