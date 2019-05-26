import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import TableCity from './components/TableCity'
import ResultadoPesquisa from './components/ResultadoPesquisa'

const App = () => {
  const [previsao, setPrevisao] = useState(false)

  const update = (prev) => {
    setPrevisao(prev)
  }

  const handlerClick = (e) => {
    e.preventDefault()
    setPrevisao(false)
  }

  return (
    <div className="container">
      <header className="header">
        <h1 className={previsao ? 'title-min' : 'title'}>Previsão do tempo</h1>
      </header>
      {!!previsao && (
        <ResultadoPesquisa
          current={previsao.current}
          next={previsao.next}
          handlerClick={handlerClick}
        />
      )}
      <SearchBar placeholder="Insira aqui o nome da cidade" action={update} />
      <div>
        <TableCity />
      </div>
    </div>
  )
}

export default App
