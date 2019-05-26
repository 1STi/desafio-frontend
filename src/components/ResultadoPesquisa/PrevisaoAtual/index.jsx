import React from 'react'
import PropTypes from 'prop-types'

const PrevisaoAtual = ({ previsao, handlerClick }) => (
  <div className="prev_atual">
    <header className="card_header">
      <h3 className="subtitle_3">
        {previsao.name}
-
        {previsao.sys.country}
      </h3>
      <button type="button" className="close" onClick={handlerClick}>
        <i className="fas fa-times" />
      </button>
    </header>
    <section className="temp_wrapper">
      <h1 className="temp_atual title">
        {Math.round(previsao.main.temp)}
        °C &nbsp;
        {previsao.weather[0].description}
      </h1>
      <p className="temp_row_info">
        <span className="bold" id="min">
          <i className="fas fa-arrow-down" />
          &nbsp;
          {Math.round(previsao.main.temp_min)}
          °C
        </span>
        <span className="bold" id="max">
          <i className="fas fa-arrow-up" />
          &nbsp;
          {Math.round(previsao.main.temp_max)}
          °C
        </span>
        <span className="info">
          Visibilidade
          {' '}
          <span className="bold">{previsao.visibility}</span>
        </span>
      </p>
      <p className="temp_row_info">
        <span className="info">
          Vento
          {' '}
          <span className="bold">
            {previsao.wind.speed}
            Km/h
          </span>
        </span>
        <span className="info">
          Humidade
          {' '}
          <span className="bold">
            {previsao.main.humidity}
%
          </span>
        </span>
      </p>
    </section>
  </div>
)

PrevisaoAtual.propTypes = {
  previsao: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired,
    }).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  handlerClick: PropTypes.func.isRequired,
}

export default PrevisaoAtual
