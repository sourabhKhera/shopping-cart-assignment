import { SAVE_OFFER_BANNERS } from './action-types'

export const saveOfferBanners = (banners) => ({
  type: SAVE_OFFER_BANNERS,
  banners,
})
