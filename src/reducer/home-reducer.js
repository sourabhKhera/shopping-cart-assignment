import { SAVE_OFFER_BANNERS } from '../actions/action-types'

const initialState = {
  banners: [],
}

const saveOfferBanners = (state, { banners }) => {
  return {
    ...state,
    banners: [...banners],
  }
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_OFFER_BANNERS:
      return saveOfferBanners(state, action)
    default:
      return state
  }
}

export default homeReducer
