import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {Icon, Button} from 'stardust'
import {remote} from 'electron'
import Query from 'utils/Query'
import {truncate} from 'utils/Strings'
import {each} from 'lodash'
import css from './styles.scss'
import cx from 'classnames'

const {app, BrowserWindow} = remote

const maximiseWindow = () => setImmediate(() => {
	const w = BrowserWindow.getFocusedWindow()
	if (w != null) {
		w.isMaximized() ? w.unmaximize() : w.maximize()
	}
})
const minimiseWindow = () => setImmediate(() => {
	const w = BrowserWindow.getFocusedWindow()
	if (w != null) {
		w.isMinimized() ? w.restore() : w.minimize()
	}
})

const mapState = state => ( console.log(state) || {
	menu: state.menu.page,
	configs: state.connections.configs,
	connections: state.connections.active,
})

class Dragbar extends Component {
	get location() {
		return this.props.location.pathname
	}

	get connectionBreadcrumbs() {
		const crumbs = [<Button as={Link} to="/" className="mini" key="link_configs">Connections</Button>]
		each(this.props.connections, (conn, id) => {
			const conf = Query(this.props.configs).where('id', id).get()
			crumbs.push(
				<Button as={Link} to={`/editor/${id}`} className="mini" key={id}>{truncate(conf.name, 20)}</Button>
			)
		})
		return crumbs
	}

	render() {
		console.log(this.location)
		return (
			<div className={cx(css.container, this.location.trim() === '/' ? null : css.red)}>
				<div className={css.pageMenu}>
					{this.props.menu}
					{this.connectionBreadcrumbs}
				</div>
				<div className={css.buttons}>
					<Icon className={cx(css.button, css.minimize)} name="minus" onClick={minimiseWindow} circular />
					<Icon className={cx(css.button, css.maximize)} name="expand" onClick={maximiseWindow} circular />
					<Icon className={cx(css.button, css.close)} name="remove" onClick={() => app.quit()} circular />
				</div>
			</div>
		)
	}
}

export default connect(mapState)(Dragbar)
