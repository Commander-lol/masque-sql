import {CREATE_CONNECTION_CONFIG, CONNECT_TO} from 'actions'
import Config from 'domain/ConnectionConfig'
import Query from 'utils/Query'

export const createConfig = conf => ({
	type: CREATE_CONNECTION_CONFIG,
	config: new Config(conf),
})

export const createConnection = conf => ({
	type: CONNECT_TO,
	connection: conf.connection,
	id: conf.id,
})

export const connectTo = id =>
	(dispatch, getState) => {
		const {connections} = getState()
		console.log(connections.configs)
		const conf = Query(connections.configs).where('id', id).get()
		dispatch(createConnection(conf))
	}
