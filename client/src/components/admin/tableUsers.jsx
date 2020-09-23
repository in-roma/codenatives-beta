import React from 'react';
import TableHeaderUsers from './tableHeaderUsers';
import TableBodyUsers from './tableBodyUsers';

const Table = (props) => {
	console.log('these are the props within table:', props);
	return (
		<table className="table-questions">
			<TableHeaderUsers />
			<TableBodyUsers data={props.data} onDelete={props.onDelete} />
		</table>
	);
};

export default Table;
