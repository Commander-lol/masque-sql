import React from 'react'
import {Icon} from 'stardust'
import css from './styles.scss'

export default () => (
	<div className={css.container}>
		<div className={css.buttons}>
			<Icon className={css.button} name="minus" circular />
			<Icon className={css.button} name="expand" circular />
			<Icon className={css.button} name="remove" onClick={() => process.exit(0)} circular />
		</div>
	</div>
)
