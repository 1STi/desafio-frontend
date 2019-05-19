import React, { useState, createContext } from 'react'
import SearchBar from './components/SearchBar'
import TableCity from './components/TableCity'
import ResultadoPesquisa from './components/ResultadoPesquisa'

const App = () => {
  const [Previsao, setPrevisao] = useState(false)

  const update = (prev) => {
    const contextPrevisao = createContext(prev)
    setPrevisao(contextPrevisao)
  }
  return (
    <div className="container">
      <header className="header">
        <h1 className={Previsao ? 'title-min' : 'title'}>Previsão do tempo</h1>
      </header>
      {Previsao && (
        <Previsao.Provider>
          <ResultadoPesquisa previsao={Previsao} />
        </Previsao.Provider>
      )}
      <SearchBar placeholder="Insira aqui o nome da cidade" action={update} />
      <div>
        <TableCity />
      </div>
    </div>
  )
}

export default App
