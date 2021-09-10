import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../../button'

import classes from './style.m.scss'

const CartCheckout = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems)
  const buttonText = (
    <>
      <div>Proceed to Checkout</div>
      <div className={classes['cart-amount']}>Rs.187</div>
    </>
  )
  const renderProceedSection =
    cartItems !== 0 ? (
      <section className={classes['section']}>
        <div className={classes['section__content-div']}>
          Promo code an be applied on payment page
        </div>
        <Button
          buttonStyle={{
            width: '95%',
            padding: '16px',
            borderRadius: '3px',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            fontSize: '13px',
          }}
          btnText={buttonText}
        />
      </section>
    ) : (
      <section className={classes['section-empty']}>
        <Button
          buttonStyle={{
            width: '95%',
            padding: '16px',
            borderRadius: '3px',
            fontSize: '13px',
          }}
          btnText={'Start Shopping'}
        />
      </section>
    )
  return <>{renderProceedSection}</>
}

export default CartCheckout
