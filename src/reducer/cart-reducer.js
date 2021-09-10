import { SAVE_CART_ITEMS_COUNT } from '../actions/action-types'

const initialState = {
  cartItems: 1,
}

const saveCartItemsCount = (state, { count }) => {
  return {
    ...state,
    cartItems: count,
  }
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CART_ITEMS_COUNT:
      return saveCartItemsCount(state, action)

    default:
      return state
  }
}

export default cartReducer
