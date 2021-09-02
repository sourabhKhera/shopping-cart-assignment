import { SAVE_PRODUCTS } from './action-types'

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products,
})
