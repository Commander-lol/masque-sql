import React, {Component} from 'react'
import css from './Root.scss'
var NotificationSystem = require('react-notification-system');
import Notify from 'utils/NotificationManager'
import {Button} from 'stardust'
import Dragbar from 'components/Dragbar'

export default class Root extends Component {

	_notificationSystem = null

	_addNotification = (event) => {
		event.preventDefault();
		Notify.add();
	}

	componentDidMount = () => {
		this.props.mountNotify(this.refs.notificationSystem)
	}

	render = ({children} = this.props) => (
		<div className={css.container}>

			<Dragbar />
			{children}
			<Button onClick={this._addNotification}>Add notification</Button>
			<NotificationSystem ref="notificationSystem" />
		</div>
	)
}
