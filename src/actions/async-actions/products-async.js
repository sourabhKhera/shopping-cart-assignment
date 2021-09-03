import axios from 'axios'
import { saveProducts } from '../products-action'

export const getProducts = () => async (dispatch) => {
  const URL = 'http://localhost:3000/productList'
  try {
    const response = await axios(URL, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
    const { data: products, status } = response
    if (status === 200 && products?.length) {
      dispatch(saveProducts(products))
    }
  } catch (error) {
    console.log(error, 'error response')
  }
}
