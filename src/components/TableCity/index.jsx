import React, { useEffect, useState } from 'react'
import './style.css'
import API from '../../helpers/api'
import TableRow from './TableRow'
import Loading from '../Loading'

const TableCity = () => {
  const [list, setList] = useState(null)

  useEffect(() => {
    const callAPI = async (city) => {
      const previsao = await API.getCurrent(city)
      setList(previsao)
    }

    callAPI('rio de janeiro')
  }, [])

  return (
    <div className="table-wrapper">
      <h2 className="subtitle">Capitais</h2>
      <table>
        <thead>
          <tr>
            <th className="col-header">Min</th>
            <th className="col-header">Max</th>
          </tr>
        </thead>
        <tbody>
          {list ? (
            <TableRow previsao={list} />
          ) : (
            <tr>
              <td>
                <Loading />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default TableCity
