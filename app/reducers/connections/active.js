import {CONNECT_TO} from 'actions'

export default (state = {}, {type, ...params}) => {
	switch (type) {
		case CONNECT_TO:
			return {
				...state,
				[params.id]: params.connection,
			}
		default:
			return state
	}
}
