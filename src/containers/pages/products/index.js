import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../components/button'
import AccordionComp from '../../../components/accordion'
import Cart from '../../../components/cart'
import { getProducts } from '../../../actions/async-actions/products-async'

import classes from './style.m.scss'

const ProductsPage = () => {
  const categories = useSelector((state) => state.homeReducer.categories)
  const products = useSelector((state) => state.productReducer.products)
  const [categoryId, setCategoryId] = useState('')
  const [addtoCart, setAddToCart] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  useEffect(() => {
    setCategoryId(categories?.length && categories[0].id)
  }, [categories])

  const mediaTabletQuery = window.matchMedia(
    '(min-width: 481px) and (max-width: 768px)'
  )
  const mediaMobileQuery = window.matchMedia('(max-width: 480px)')

  const openCartModal = () => {
    document.body.style = 'overflow: hidden'
    setAddToCart(true)
  }

  const closeCartModal = () => {
    document.body.style = 'overflow: unset'
    setAddToCart(false)
  }

  const renderProductsInfo = (item) => {
    return mediaTabletQuery.matches ? (
      <>
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
            handleClick={openCartModal}
          />
        </div>
      </>
    ) : mediaMobileQuery.matches ? (
      <>
        <div className={classes['main__section-right__product-info']}>
          <div
            className={classes['main__section-right__product-info__div-elem1']}
          >
            <img
              src={item.imageURL}
              alt={item.name}
              className={classes['main__section-right__img']}
            />
            <div>
              <div className={classes['main__section-right__div-elem3']}>
                <div className={classes['main__section-right__div-elem4']}>
                  {item.description}
                </div>
              </div>
              <Button
                btnText={`Buy Now @ Rs.${item.price}`}
                buttonStyle={{
                  width: '100%',
                  marginTop: '35px',
                  padding: '11px',
                  fontSize: '11px',
                }}
                handleClick={openCartModal}
              />
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
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
          <Button
            btnText="Buy Now"
            buttonStyle={{ padding: '10px 25px' }}
            handleClick={openCartModal}
          />
        </div>
      </>
    )
  }
  const renderCategories = categories?.length
    ? categories.map((item, idx) => {
        return (
          <div
            className={classes['main__section-left__product-category']}
            key={idx}
            onClick={() => setCategoryId(item.id)}
          >
            {item.name}
          </div>
        )
      })
    : []
  const renderProducts = (
    <section className={classes['main__section-right']}>
      {products?.length
        ? products
            .filter((item) => item.category === categoryId)
            .map((item, idx) => {
              return (
                <div
                  className={classes['main__section-right__div-elem1']}
                  key={idx}
                >
                  <div className={classes['main__section-right__div-elem2']}>
                    {item.name}
                  </div>
                  {renderProductsInfo(item)}
                </div>
              )
            })
        : []}
    </section>
  )
  const renderProductSection = mediaMobileQuery.matches ? (
    <AccordionComp
      data={categories}
      renderProducts={renderProducts}
      setCategoryId={setCategoryId}
      categoryId={categoryId}
    />
  ) : (
    <>
      {addtoCart && <Cart closeCartModal={closeCartModal} />}
      <section className={classes['main__section-left']}>
        {renderCategories}
      </section>
      {renderProducts}
    </>
  )
  return <main className={classes['main']}>{renderProductSection}</main>
}

export default ProductsPage
