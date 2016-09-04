import {SET_PAGE_MENU} from 'actions'

export default (state = null, {type, ...params}) => {
	switch (type) {
		case SET_PAGE_MENU:
			return params.content
		default:
			return state
	}
}
