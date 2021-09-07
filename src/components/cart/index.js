import React from 'react'
import Button from '../button'
import classes from './style.m.scss'
import lowestPrice from '../../../static/images/lowest-price.png'

const Cart = ({ closeCartModal }) => {
  const buttonText = (
    <>
      <div>Proceed to Checkout</div>
      <div className={classes['cart-amount']}>Rs.187</div>
    </>
  )
  return (
    <>
      <div className={classes['overlay']}></div>
      <div className={classes['modal']}>
        <section className={classes['modal__section-elem1']}>
          <div className={classes['modal__section-elem1__content-div']}>
            My Cart (1item)
          </div>
          <i
            className={`material-icons ${classes['modal__section-elem1__close-icon']}`}
            onClick={closeCartModal}
          >
            close
          </i>
        </section>
        <section className={classes['modal__section-elem2']}>
          <div className={classes['modal__section-elem2__div-elem1']}></div>
          <div className={classes['modal__section-elem2__div-elem2']}>
            <img
              src={lowestPrice}
              alt="Lowest Price Image"
              className={classes['modal__section-elem2__div-elem2__img']}
            />
            <div
              className={
                classes['modal__section-elem2__div-elem2__content-div']
              }
            >
              You won't find it cheaper anywhere
            </div>
          </div>
        </section>
        <section className={classes['modal__section-elem3']}>
          <div className={classes['modal__section-elem3__content-div']}>
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
            }}
            btnText={buttonText}
          />
        </section>
      </div>
    </>
  )
}

export default Cart
