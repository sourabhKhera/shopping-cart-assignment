import { SAVE_PRODUCTS } from '../actions/action-types'

const initialState = {
  products: [],
}

const saveProducts = (state, { products }) => {
  return {
    ...state,
    products: [...products],
  }
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return saveProducts(state, action)

    default:
      return state
  }
}

export default productReducer
