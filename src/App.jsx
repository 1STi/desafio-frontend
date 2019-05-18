import React, { useState } from 'react'
import SearchBar from './components/SearchBar'

const App = () => {
  const [previsao, setPrevisao] = useState(false)

  const update = () => setPrevisao(true)
  return (
    <div className="container">
      {!previsao && <h1 className="title">Previsão do tempo</h1>}
      <SearchBar placeholder="Insira aqui o nome da cidade" action={update} />
    </div>
  )
}

export default App
