import React from 'react'
import Config from '../components/Config'
import {Container} from 'stardust'
import css from './List.scss'

const mockConfigs = [
	{
		title: ''
	}
]

export default ({configs = mockConfigs}) => (
	<Container className={css.container}>
		{configs.map(config => <Config {...config}/>)}
	</Container>
)
