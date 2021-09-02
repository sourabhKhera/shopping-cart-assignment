import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../../components/carausel'
import { getProducts } from '../../../actions/async-actions/products-async'

const ProductsPage = () => {
  const dispatch = useDispatch()
  //   const categories = useSelector((state) => state.homeReducer.categories)
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return <main>Hello products!</main>
}

export default ProductsPage
