import React from 'react'
import './style.css'
import PropTypes from 'prop-types'
import PrevisaoSemana from './PrevisaoSemana'
import PrevisaoAtual from './PrevisaoAtual'

const ResultadoPesquisa = ({ previsao, handlerClick }) => (
  <div className="card_wrapper">
    <PrevisaoAtual previsao={previsao} handlerClick={handlerClick} />
    <PrevisaoSemana />
  </div>
)

ResultadoPesquisa.propTypes = {
  previsao: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  handlerClick: PropTypes.func.isRequired,
}

export default ResultadoPesquisa
