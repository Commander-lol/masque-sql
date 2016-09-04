import React, {Component} from 'react'
import {Modal, Form, Button, Input, Label, Icon} from 'stardust'
import Tabs, {Page} from 'components/Tabs'
import css from './styles.scss'

export default class NewConfigModal extends Component {

	state = {
		mode: 'DSN',
		DSN: '',
		Advanced: {

		},
	}

	setMode = mode => console.log(mode) || this.setState({mode})

	getConfig = () => this.state[this.state.mode]


	render() {
		const {onSave, ...props} = this.props
		const {mode, DSN} = this.state
		return (
			<Modal {...props}>
				<Modal.Header>New Connection</Modal.Header>
				<Modal.Content>
					<Tabs active={mode} onChange={this.setMode}>
						<Page name="DSN">
							<Form>
								<Form.Field>
									<Input className="labeled" value={DSN} onChange={({target}) => this.setState({DSN: target.value})} placeholder="user:pass@host/db">
										<Label>{'mysql://'}</Label>
									</Input>
								</Form.Field>
							</Form>
						</Page>
						<Page name="Advanced">
							<p>
								Advanced configuration is coming soon. This includes explicit host/port as well as full support for
								all mysql connection options listed in the mysql docs
							</p>
						</Page>
					</Tabs>
				</Modal.Content>
				<Modal.Actions>
					<Button className="negative" onClick={props.onHide}>Cancel</Button>
					<Button className="positive" onClick={() => onSave(this.getConfig())} disabled={mode==='Advanced'}>Save</Button>
				</Modal.Actions>
			</Modal>
		)
	}
}
