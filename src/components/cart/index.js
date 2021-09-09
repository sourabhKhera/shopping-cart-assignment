import React from 'react'
import Button from '../button'
import CartHeader from './cart-header'
import CartCheckout from './cart-checkout'
import CartItem from './cart-item'

import { isMobile, isTablet } from '../../utils'

import classes from './style.m.scss'

const Cart = ({ closeCartModal }) => {
  const renderModal =
    isTablet() || isMobile() ? (
      <main className={classes['main']}>
        <CartHeader closeCartModal={() => {}} />
        <CartItem />
        <CartCheckout />
      </main>
    ) : (
      <>
        <div className={classes['overlay']}></div>
        <div className={classes['modal']}>
          <CartHeader closeCartModal={closeCartModal} />
          <CartItem />
          <CartCheckout />
        </div>
      </>
    )

  return <>{renderModal}</>
}

export default Cart
