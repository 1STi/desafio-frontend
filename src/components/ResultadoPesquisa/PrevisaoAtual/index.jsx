import React from 'react'
import PropTypes from 'prop-types'

const PrevisaoAtual = ({ Previsao }) => {
  console.log(Previsao)
  return (
    <div className="prev_atual">
      <header className="card_header">
        <h3 className="subtitle_3">
          {Previsao.name}
-
          {Previsao.sys.country}
        </h3>
        <button type="button" className="close">
          <i className="fas fa-times" />
        </button>
      </header>
      <section className="temp_wrapper">
        <h1 className="temp_atual title">
          {Previsao.main.temp}
°C
          {Previsao.weather[0].description}
        </h1>
        <p className="temp_row_info">
          <span className="bold" id="min">
            <i className="fas fa-arrow-down" />
            &nbsp;
            {Previsao.main.temp_min}
°C
          </span>
          <span className="bold" id="max">
            <i className="fas fa-arrow-up" />
            &nbsp;
            {Previsao.main.temp_min}
°C
          </span>
          <span className="info">
            Visibilidade
            {' '}
            <span className="bold">{Previsao.visibility}</span>
          </span>
        </p>
        <p className="temp_row_info">
          <span className="info">
            Vento
            {' '}
            <span className="bold">
              {Previsao.wind.speed}
Km/h
            </span>
          </span>
          <span className="info">
            Humidade
            {' '}
            <span className="bold">
              {Previsao.main.humidity}
%
            </span>
          </span>
        </p>
      </section>
    </div>
  )
}

PrevisaoAtual.propTypes = {
  Previsao: PropTypes.shape({
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
}

export default PrevisaoAtual
