import React from 'react'
import Grid from 'react-data-grid'
import cx from 'classnames'
import css from './ResultsTable.scss'

export default ({data, className}) => {
	const colNames = Object.keys(data[0])
	const CellFormatter = ({value}) => <span className={css.cell}>{value}</span>
	const cols = colNames.map(cn => ({
		key: cn,
		name: cn,
		resizable: true,
		width: 100,
		formatter: CellFormatter,
	}))
	const rowGetter = i => data[i]
	return (
		<Grid
			columns={cols}
			rowGetter={rowGetter}
			rowsCount={data.length}
		/>
	)
}

