import { SAVE_OFFER_BANNERS, SAVE_CATEGORIES } from './action-types'

export const saveOfferBanners = (banners) => ({
  type: SAVE_OFFER_BANNERS,
  banners,
})

export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories,
})
