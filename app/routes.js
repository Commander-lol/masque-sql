import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './containers/Root'

import * as Main from 'views/Main'
import * as Editor from 'views/Editor'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Main.List} />
		<Route path="editor/:connection_id" component={Editor.Connection} />
	</Route>
)
