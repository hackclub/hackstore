import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'
//We should never mutate the state directly

const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)

const store = createStore(rootReducer, composedEnhancers)

export default store
