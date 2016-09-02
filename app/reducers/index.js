import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import notifier from './notifier'

const rootReducer = combineReducers(
	{
		routing,
		notifier,
	}
)

export default rootReducer
