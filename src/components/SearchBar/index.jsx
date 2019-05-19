import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import API from '../../helpers/api'

const SearchBar = ({ placeholder, action }) => {
  const handlerClick = async (e) => {
    const city = e.target.previousSibling.value
    e.target.previousSibling.value = ''
    const previsao = await API.getCurrent(city)
    action(previsao)
    console.log(previsao)
  }

  return (
    <div className="search-wrapper">
      <input type="text" className="search-bar" placeholder={placeholder} />
      <button type="submit" className="button-search fas fa-search icon" onClick={handlerClick} />
    </div>
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}

export default SearchBar
