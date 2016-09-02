import {SET_NOTIFIER} from 'actions'

export default (state = null, {type, ...params}) => {
	switch (type) {
		case SET_NOTIFIER:
			return params.notifier
		default:
			return state
	}
}
