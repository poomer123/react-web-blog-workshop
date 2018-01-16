import {combineReducers} from 'redux'


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

const reducers = combineReducers({
    counter,
})

export default reducers