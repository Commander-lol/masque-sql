import React, {Component} from 'react'
import css from './styles.scss'
import cx from 'classnames'

export class Page extends Component {
	render() {
		return (
			<div className={cx('ui tab segment', this.props.active ? 'active' : css.hidden)}>
				{this.props.children}
			</div>
		)
	}
}

export default class Tabs extends Component {

	nameof = el => el.props.name

	render() {
		const {active, onChange} = this.props
		const children = React.Children.toArray(this.props.children)
		const names = []

		children.forEach(child => names.push(this.nameof(child)))

		return (
			<div>
				<div className="ui secondary menu">
					{names.map(name => <a key={name} className={cx('item', active === name && 'active')} onClick={() => onChange(name)}>{name}</a>)}
				</div>
				{children.map(child => React.cloneElement(child, {active: active === child.props.name, key: child.props.name}))}
			</div>
		)
	}

}
