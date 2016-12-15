import React from 'react';

const TableRow = ({capital}) => {
	return (
    	<tr>
        	<td>{capital.minTemp}°C</td>
        	<td>{capital.maxTemp}°C</td>
        	<td>{capital.name}</td>
      	</tr>
    );
}

export default TableRow;