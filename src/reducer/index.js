import { combineReducers } from 'redux'
import homeReducer from './home-reducer'
import productReducer from './products-reducer'
import cartReducer from './cart-reducer'
const rootReducer = combineReducers({
  homeReducer,
  productReducer,
  cartReducer,
})

export default rootReducer
