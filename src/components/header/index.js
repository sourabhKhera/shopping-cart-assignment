import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../static/images/logo.png'
import cartLogo from '../../../static/images/cart.svg'
import classes from './style.m.scss'

const Header = () => {
  return (
    <div className={classes['header']}>
      <div className={classes['header__sub-div']}>
        <section className={classes['header__section-left']}>
          <img src={logo} alt="Site Logo" height="50px" />
          <nav className={classes['header__nav-left']}>
            <span className={classes['header__nav-left__span']}>
              <NavLink activeClassName={classes['active']} to="/" exact>
                Home
              </NavLink>
            </span>
            <span className={classes['header__nav-left__span']}>
              <NavLink activeClassName={classes['active']} to="/products">
                Products
              </NavLink>
            </span>
          </nav>
        </section>
        <section className={classes['header__section-right']}>
          <div className={classes['header__section-right__content']}>
            <nav className={classes['header__nav-right']}>
              <span className={classes['header__nav-right__span']}>
                <NavLink activeClassName={classes['active']} to="/login">
                  Signin
                </NavLink>
              </span>

              <span className={classes['header__nav-right__span']}>
                <NavLink activeClassName={classes['active']} to="/register">
                  Register
                </NavLink>
              </span>
            </nav>
            <div className={classes['header__cart-items-count']}>
              <img
                src={cartLogo}
                className={`${classes['cart-icon']}`}
                alt="Cart Logo"
              />
              <span className={classes['header__cart-items-count__span']}>
                0 items
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Header
