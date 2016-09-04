import {combineReducers} from 'redux'
import configs from './config'
import active from './active'

export default combineReducers(
	{
		configs,
		active,
	}
)
