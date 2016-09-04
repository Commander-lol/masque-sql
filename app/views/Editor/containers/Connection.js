import {connect} from 'react-redux'
import {setMenuContent} from 'actions/menu'
import Connection from '../layouts/Connection'

const mapState = state => ({
	connections: state.connections.active,
})

const mapDispatch = dispatch => ({
	setMenu: menu => dispatch(setMenuContent(menu)),
})

export default connect(mapState, mapDispatch)(Connection)
