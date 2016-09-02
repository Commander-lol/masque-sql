import React from 'react'
import css from './styles.scss'
import {Card} from 'stardust'
export default ({a}) => (
	<Card color="blue" className={css.container}>
		{a}
	</Card>
)
