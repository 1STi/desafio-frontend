import React from 'react';

const ResponsiveTable = ({rows, name}) => {
	return (
		<table className={name}>
	        <thead>
	        	<tr>
	            	<th>Min</th>
	            	<th>Máx</th>
	            	<th></th>
	         	 </tr>
	        </thead>
	        <tbody>{rows}</tbody>
      	</table>
	)
}

export default ResponsiveTable;