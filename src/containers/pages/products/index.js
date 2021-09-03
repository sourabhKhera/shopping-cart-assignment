import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../components/button'

import { getProducts } from '../../../actions/async-actions/products-async'

import classes from './style.m.scss'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.homeReducer.categories)
  const products = useSelector((state) => state.productReducer.products)
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const mediaQuery = window.matchMedia('(max-width: 768px)')

  const renderProductsInfo = (item) => {
    return mediaQuery.matches ? (
      <Fragment>
        <div className={classes['main__section-right__product-info']}>
          <div
            className={classes['main__section-right__product-info__div-elem1']}
          >
            <img
              src={item.imageURL}
              alt={item.name}
              className={classes['main__section-right__img']}
            />
            <div className={classes['main__section-right__div-elem3']}>
              <div className={classes['main__section-right__div-elem4']}>
                {item.description}
              </div>
            </div>
          </div>
          <Button
            btnText={`Buy Now @ Rs.${item.price}`}
            buttonStyle={{ width: '100%', marginTop: '10px' }}
          />
        </div>
      </Fragment>
    ) : (
      <Fragment>
        <img
          src={item.imageURL}
          alt={item.name}
          className={classes['main__section-right__img']}
        />
        <div className={classes['main__section-right__div-elem3']}>
          <div className={classes['main__section-right__div-elem4']}>
            {item.description}
          </div>
        </div>
        <div className={classes['main__section-right__div-elem5']}>
          <div className={classes['main__section-right__div-elem6']}>
            MRP Rs.{item.price}
          </div>
          <Button btnText="Buy Now" buttonStyle={{ padding: '10px 25px' }} />
        </div>
      </Fragment>
    )
  }
  const renderCategories = categories?.length
    ? categories.map((item, idx) => {
        return (
          <div
            className={classes['main__section-left__product-category']}
            key={idx}
          >
            {item.name}
          </div>
        )
      })
    : []
  const renderProducts = products?.length
    ? products.map((item, idx) => {
        return (
          <div className={classes['main__section-right__div-elem1']} key={idx}>
            <div className={classes['main__section-right__div-elem2']}>
              {item.name}
            </div>
            {renderProductsInfo(item)}
          </div>
        )
      })
    : []
  return (
    <main className={classes['main']}>
      <section className={classes['main__section-left']}>
        {renderCategories}
      </section>
      <section className={classes['main__section-right']}>
        {renderProducts}
      </section>
    </main>
  )
}

export default ProductsPage
