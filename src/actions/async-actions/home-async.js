import axios from 'axios'
import { saveOfferBanners } from '../home-action'

export const getOfferBanners = () => async (dispatch) => {
  const URL = 'http://localhost:3000/banners'
  try {
    const response = await axios(URL, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
    const { data: banners, status } = response
    if (status === 200 && banners?.length) {
      dispatch(saveOfferBanners(banners))
    }
  } catch (error) {
    console.log(error, 'error response')
  }
}
