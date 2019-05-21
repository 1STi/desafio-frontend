import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import API from '../../helpers/api'

const SearchBar = ({ placeholder, action }) => {
  const handlerClick = async (e) => {
    try {
      const city = e.target.previousSibling.value
      e.target.previousSibling.value = ''
      const previsao = await API.getCurrent(city)
      action(previsao.name ? previsao : false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="search-wrapper">
      <input type="text" className="search-bar" placeholder={placeholder} />
      <button type="button" className="button-search fas fa-search icon" onClick={handlerClick} />
    </div>
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}

export default SearchBar
