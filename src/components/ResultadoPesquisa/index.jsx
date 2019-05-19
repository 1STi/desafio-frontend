import React from 'react'
import './style.css'
import PrevisaoSemana from './PrevisaoSemana'
import PrevisaoAtual from './PrevisaoAtual'

const ResultadoPesquisa = () => (
  <div className="card_wrapper">
    <PrevisaoAtual />
    <PrevisaoSemana />
  </div>
)

export default ResultadoPesquisa
