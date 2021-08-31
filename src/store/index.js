import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools as compose } from 'redux-devtools-extension'
import rootReducer from '../reducer'
import middleware from '../middleware'

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

export default store
