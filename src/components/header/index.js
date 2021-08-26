import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../static/images/logo.png'

import classes from './style.scss'

const Header = () => {
  return (
    <div className={classes['header']}>
      <section className={classes['header__section-left']}>
        <img src={logo} alt="Site Logo" height="50px" />
        <nav className={classes['header__nav-left']}>
          <span className={classes['header__nav-left__span']}>Home</span>
          <span className={classes['header__nav-left__span']}>Products</span>
        </nav>
      </section>
      <section className={classes['header__section-right']}>
        <div className={classes['header__section-right__content']}>
          <nav className={classes['header__nav-right']}>
            <span className={classes['header__nav-right__span']}>
              <Link to="/login">Signin</Link>
            </span>

            <span className={classes['header__nav-right__span']}>
              <Link to="/register">Register</Link>
            </span>
          </nav>
          <div className={classes['header__cart-items-count']}>
            <i className={`${classes['cart-icon']} fas fa-shopping-cart`}></i>
            <span className={classes['header__cart-items-count__span']}>
              0 items
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header
