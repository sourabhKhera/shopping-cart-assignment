import React from 'react'
import { isMobile, isTablet } from '../../../utils'

import classes from './style.m.scss'

const CartHeader = ({ closeCartModal }) => {
  const renderCloseIcon =
    !isMobile() && !isTablet() ? (
      <i
        className={`material-icons ${classes['section__close-icon']}`}
        onClick={closeCartModal}
      >
        close
      </i>
    ) : null
  return (
    <section className={classes['section']}>
      <div className={classes['section__content-div']}>
        <div className={classes['section__content-div__div-elem1']}>
          My Cart
        </div>
        <div className={classes['section__content-div__div-elem2']}>
          (1 item)
        </div>
      </div>
      {renderCloseIcon}
    </section>
  )
}

export default CartHeader
