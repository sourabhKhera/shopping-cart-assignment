import React from 'react'
import Button from '../../button'

import classes from './style.m.scss'

const CartCheckout = () => {
  const buttonText = (
    <>
      <div>Proceed to Checkout</div>
      <div className={classes['cart-amount']}>Rs.187</div>
    </>
  )
  return (
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
  )
}

export default CartCheckout
