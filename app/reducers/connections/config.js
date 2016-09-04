import {CREATE_CONNECTION_CONFIG} from 'actions'

export default (state = [], action) => {
	switch (action.type) {
		case CREATE_CONNECTION_CONFIG:
			return [action.config].concat(state)
		default:
			return state
	}
}

