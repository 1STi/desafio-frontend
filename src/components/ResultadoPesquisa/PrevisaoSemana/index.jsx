import React from 'react'
import PropTypes from 'prop-types'

const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

const PrevisaoSemana = ({ next }) => (
  <ul className="prev_semana">
    {next.map(({ dt_txt, main }) => {
      const dtIdx = new Date(dt_txt).getDay()
      return (
        <li className="dia" key={dt_txt}>
          <h3 className="subtitle_3">{days[dtIdx]}</h3>
          <p className="temp">
            {Math.round(main.temp_min)}
° &nbsp;
            {Math.round(main.temp_max)}
°
          </p>
        </li>
      )
    })}
  </ul>
)

PrevisaoSemana.propTypes = {
  next: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PrevisaoSemana
