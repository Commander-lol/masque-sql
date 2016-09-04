import React, {Component} from 'react'
import css from './Root.scss'
import { Scrollbars } from 'react-custom-scrollbars'
import NotificationSystem  from 'react-notification-system'
import {Button} from 'stardust'
import Dragbar from 'components/Dragbar'

export default class Root extends Component {

	componentDidMount = () => {
		this.props.mountNotify(this.refs.notificationSystem)
	}

	render = ({children, location} = this.props) => (
		<div className={css.container}>
			<Scrollbars className={css.container} autoHide={false}>
				{children}
			</Scrollbars>
			<NotificationSystem ref="notificationSystem" />
			<Dragbar location={location} />
		</div>
	)
}
