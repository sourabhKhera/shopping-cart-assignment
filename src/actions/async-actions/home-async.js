import axios from 'axios'
import { saveOfferBanners, saveCategories } from '../home-action'

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

export const getCategories = () => async (dispatch) => {
  const URL = 'http://localhost:3000/categories'
  try {
    const response = await axios(URL, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
    const { data: categories, status } = response
    if (status === 200 && categories?.length) {
      dispatch(saveCategories(categories))
    }
  } catch (error) {
    console.log(error, 'error response')
  }
}