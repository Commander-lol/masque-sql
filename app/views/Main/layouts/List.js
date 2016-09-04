import React, {Component} from 'react'
import Config from '../components/Config'
import NewConfigModal from '../components/NewConfigModal'
import {Container, Card, Header} from 'stardust'
import cardcss from '../components/Config/styles.scss'
import css from './List.scss'
import cx from 'classnames'

export default class List extends Component {
	state = {
		modalOpen: false,
	}

	componentDidMount() {
		this.props.clearMenu()
	}

	render() {
		const {configs, create, connect, connections} = this.props
		return (
			<div className={css.page}>
				<Header size="large">Configurations</Header>
				<div className={css.container}>
					{configs.map(config => <Config key={config.id} active={config.id in connections} onConnect={() => connect(config.id)} {...config}/>)}
					<Card className={cx(cardcss.container, cardcss.centred)} onClick={() => this.setState({modalOpen: true})} color="blue">
						Create New Connection...
					</Card>
					<NewConfigModal
						active={this.state.modalOpen}
						onHide={() => this.setState({modalOpen: false})}
						onSave={conf => {
							create(conf)
							this.setState({modalOpen: false})
						}}
						closeOnClickOutside={false}
					/>
				</div>
				<Header size="large">Labels</Header>
				<div className={css.container}><p>blasdh</p></div>
			</div>
		)
	}
}
