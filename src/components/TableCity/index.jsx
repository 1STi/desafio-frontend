import React, { useEffect, useState } from 'react'
import './style.css'
import API from '../../helpers/api'
import TableRow from './TableRow'
import Loading from '../Loading'

const capitais = [
  'Rio Branco',
  'Maceió',
  'Macapá',
  'Manaus',
  'Salvador',
  'Fortaleza',
  'Brasília',
  'Vitória',
  'Goiânia',
  'São Luiz',
  'Cuiabá',
  'Campo Grande',
  'Belo Horizonte',
  'Belém',
  'João Pessoa',
  'Curitiba',
  'Recife',
  'Rio de Janeiro',
  'Natal',
  'Porto Alegre',
  'Porto Velho',
  'Boa Vista',
  'Florianópolis',
  'São Paulo',
  'Palmas',
]

const TableCity = () => {
  const [list, setList] = useState(null)

  const aloneArray = []

  useEffect(() => {
    const callAPI = async (city) => {
      const previsao = await API.getCurrent(city)
      aloneArray.push(previsao)

      if (aloneArray.length >= capitais.length) setList(aloneArray)
    }

    capitais.forEach(cap => callAPI(cap))
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
            list.map(capital => <TableRow previsao={capital} key={capital.name} />)
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
