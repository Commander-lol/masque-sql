import React, {Component} from 'react'
import {Form, Button, Icon} from 'stardust'
import SplitPane from 'react-split-pane'
import Scrollbars from 'react-custom-scrollbars'
import ResultsTable from '../components/ResultsTable'
import css from './Connection.scss'
import cx from 'classnames'

export default class Connection extends Component {
	state = {
		query: '',
		databases: [],
		active: null,
		error: null,
		result: null,
	}

	get connection() {
		return this.props.connections[this.props.params.connection_id]
	}

	set database(database) {
		this.connection.changeUser({database}, error => error ? this.setState({error}) : null)
	}

	componentWillMount() {
		if (this.connection != null) {
			this.connection.databases(this.setErrRes('databases'))
		}
	}

	exec = query => {
		this.connection.query(query, this.setErrRes('result'))
	}

	setErrRes = name => (error, res) => {
		if (error) {
			this.setState({error})
		} else {
			this.setState({error: null, [name]: res})
		}
	}

	render() {
		const {query, databases} = this.state
		let databaseList = [];
		if (databases.length === 0) {
			databaseList.push(<Icon className={css.spinner} name="spinner" key="loader" size="large" loading />)
		} else {
			databaseList = databases.map(db => <Button className={css.dbutton} onClick={() => this.database = db} key={db}>{db}</Button>)
		}

		let results = <p>No Results To Show</p>

		if (this.state.error != null) {
			results = <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
		} else if (this.state.result != null) {
			results = <ResultsTable data={this.state.result} />
		}

		return (
			<SplitPane split="vertical" minSize={150}>
				<div className={css.databases}>
					{databaseList}
				</div>
				<SplitPane split="horizontal" defaultSize="40%" minSize={200}>
					<div className={css.queryContainer}>
						<Form.TextArea className={css.query} value={query} onChange={({target: {value: q}}) => this.setState({query: q})} />
					</div>
					<div>
						<div className={css.controls}>
							<Button className={css.button} onClick={() => this.exec(this.state.query)}>Query</Button>
						</div>
						{results}
					</div>
				</SplitPane>
			</SplitPane>
		)
	}
}
