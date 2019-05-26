import React from 'react'
import './style.css'
import PropTypes from 'prop-types'
import PrevisaoSemana from './PrevisaoSemana'
import PrevisaoAtual from './PrevisaoAtual'

const ResultadoPesquisa = ({ current, handlerClick, next }) => (
  <div className="card_wrapper">
    <PrevisaoAtual previsao={current} handlerClick={handlerClick} />
    <PrevisaoSemana next={next} />
  </div>
)

ResultadoPesquisa.propTypes = {
  current: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  handlerClick: PropTypes.func.isRequired,
  next: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ResultadoPesquisa
