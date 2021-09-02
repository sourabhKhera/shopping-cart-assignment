import { combineReducers } from 'redux'
import homeReducer from './home-reducer'
import productReducer from './products-reducer'

const rootReducer = combineReducers({
  homeReducer,
  productReducer,
})

export default rootReducer
