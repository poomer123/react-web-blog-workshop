// @flow
import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {match, Router, browserHistory} from 'react-router'
import {createStore} from 'redux'
import routes from './routes'
import {Provider} from 'react-redux'


// (state, action) => new state
function counter( state = 0, action ) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		default:
			return state
	}
}

const store = createStore(counter)

match(
	{history: browserHistory, routes},
	(error, redirectLocation, renderProps) => {
		ReactDOM.render(
			<Provider store={store}>
				<Router {...renderProps} />
			</Provider>,

			document.getElementById('app')
		)
	}
)