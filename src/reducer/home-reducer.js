import { SAVE_OFFER_BANNERS, SAVE_CATEGORIES } from '../actions/action-types'

const initialState = {
  banners: [],
  categories: [],
}

const saveOfferBanners = (state, { banners }) => {
  return {
    ...state,
    banners: [...banners],
  }
}

const saveCategories = (state, { categories }) => {
  const sortedCategories = categories?.length
    ? categories.sort((a, b) => a.order - b.order)
    : []
  return {
    ...state,
    categories: [...sortedCategories],
  }
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_OFFER_BANNERS:
      return saveOfferBanners(state, action)
    case SAVE_CATEGORIES:
      return saveCategories(state, action)
    default:
      return state
  }
}

export default homeReducer
