import {createStore, applyMiddleware, compose} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducers from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function configureStore() {
    const store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(thunk, promiseMiddleware())
        ),
    )
    return store
}
