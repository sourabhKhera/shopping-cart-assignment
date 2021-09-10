import React from 'react'
import { useSelector } from 'react-redux'
import { isMobile, isTablet } from '../../../utils'

import classes from './style.m.scss'

const CartHeader = ({ closeCartModal }) => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems)

  const renderCloseIcon =
    !isMobile() && !isTablet() ? (
      <i
        className={`material-icons ${classes['section__close-icon']}`}
        onClick={closeCartModal}
      >
        close
      </i>
    ) : null
  const renderCountofItems =
    cartItems !== 0 ? (
      <div className={classes['section__content-div__div-elem2']}>(1 item)</div>
    ) : null
  return (
    <section className={classes['section']}>
      <div className={classes['section__content-div']}>
        <div className={classes['section__content-div__div-elem1']}>
          My Cart
        </div>
        {renderCountofItems}
      </div>
      {renderCloseIcon}
    </section>
  )
}

export default CartHeader
