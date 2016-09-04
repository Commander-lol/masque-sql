import React from 'react'
import css from './styles.scss'
import {Card, Header, Button} from 'stardust'
import {Link} from 'react-router'
import cx from 'classnames'

export default ({id, name, type, onConnect, active}) => (
	<Card as={active ? Link : undefined} to={`/editor/${id}`} color={active ? 'green' : 'blue'} className={cx(css.container, css.centred)}>
		<Header size="medium">{name}</Header>
		<div className={cx(css.smaller)}>{id}</div>
		{!active && <Button onClick={onConnect} className="mini">Connect</Button>}
		{/* <div className="ui bottom right attached label">{type}</div> */}
	</Card>
)
