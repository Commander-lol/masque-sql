import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import notifier from './notifier'
import connections from './connections'
import menu from './menu'

const rootReducer = combineReducers(
	{
		routing,
		notifier,
		connections,
		menu,
	}
)

export default rootReducer
