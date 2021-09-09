import React from 'react'
import lowestPrice from '../../../../static/images/lowest-price.png'

import classes from './style.m.scss'

const CartItem = () => {
  return (
    <section className={classes['section']}>
      <div className={classes['section__div-elem1']}>
        <img
          src="/static/images/products/fruit-n-veg/apple.jpg"
          alt="Apple - Washington, Regular, 4 pcs"
          className={classes['section__div-elem1__img']}
        />
        <div className={classes['section__div-elem1__right-section']}>
          <div
            className={classes['section__div-elem1__right-section__div-elem1']}
          >
            Apple - Washington, Regular, 4 pcs
          </div>
          <div
            className={classes['section__div-elem1__right-section__div-elem2']}
          >
            <i
              className={`material-icons ${classes['section__div-elem1__right-section__plus-minus-icon']}`}
            >
              remove_circle
            </i>
            <span>1</span>
            <i
              className={`material-icons ${classes['section__div-elem1__right-section__plus-minus-icon']}`}
            >
              add_circle
            </i>
            <div className={classes['item-price-div']}>
              <div className={classes['item-mrp-div']}>
                <i
                  className={`material-icons ${classes['item-mrp-div__close-icon']}`}
                >
                  close
                </i>
                <div className={classes['item-mrp']}>Rs.187</div>
              </div>
              <div className={classes['amount']}>Rs.187</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes['section__div-elem2']}>
        <img
          src={lowestPrice}
          alt="Lowest Price Image"
          className={classes['section__div-elem2__img']}
        />
        <div className={classes['section__div-elem2__content-div']}>
          You won't find it cheaper anywhere
        </div>
      </div>
    </section>
  )
}

export default CartItem
