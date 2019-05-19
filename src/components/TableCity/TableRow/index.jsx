import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const TableRow = ({ previsao }) => (
  <tr>
    <td className="dado min">
      {parseInt(previsao.main.temp_min, 0)}
°
    </td>
    <td className="dado max">
      {parseInt(previsao.main.temp_max, 0)}
°
    </td>
    <td className="dado_city">{previsao.name}</td>
  </tr>
)

TableRow.propTypes = {
  previsao: PropTypes.shape({
    name: PropTypes.string.isRequired,
    main: PropTypes.shape({
      temp_max: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}

export default TableRow
