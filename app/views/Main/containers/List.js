import {connect} from 'react-redux'
import List from '../layouts/List'

import {createConfig, connectTo} from 'actions/connections'
import {setMenuContent} from 'actions/menu'

const mapState = state => ({
	configs: state.connections.configs,
	connections: state.connections.active,
})

const mapDispatch = dispatch => ({
	create: conf => dispatch(createConfig(conf)),
	connect: id => dispatch(connectTo(id)),
	clearMenu: () => dispatch(setMenuContent(null)),
})

export default connect(mapState, mapDispatch)(List)
