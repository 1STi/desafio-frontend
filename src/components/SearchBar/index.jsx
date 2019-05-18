import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const SearchBar = ({ placeholder }) => (
  <div className="search-wrapper">
    <input type="text" className="search-bar" placeholder={placeholder} />
    <button type="submit" className="button-search">
      <i className="fas fa-search icon" />
    </button>
  </div>
)

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
}

export default SearchBar
