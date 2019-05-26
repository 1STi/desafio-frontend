import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import API from '../../helpers/api'

const SearchBar = ({ placeholder, action }) => {
  const [city, setCity] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setCity(e.target.value)
  }

  const handlerClick = async (e) => {
    try {
      e.target.previousSibling.value = ''
      const [current, next] = await API.getAll(city)
      action(current.name ? { current, next } : false)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="search-wrapper">
      <input type="text" className="search-bar" placeholder={placeholder} onChange={handleChange} />
      <button type="button" className="button-search fas fa-search icon" onClick={handlerClick} />
    </div>
  )
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
}

export default SearchBar
