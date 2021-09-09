import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Register from '../containers/register'
import HomePage from '../containers/pages/home'
import ProductsPage from '../containers/pages/products'
import Cart from '../components/cart'
import { getCategories } from '../actions/async-actions/home-async'
import { isMobile, isTablet } from '../utils'
import {
  registerConfig,
  loginConfig,
} from '../components_config/login_register'

const unauthenticatedRoutes = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/register">
        <Register config={registerConfig} />
      </Route>
      <Route path="/login">
        <Register config={loginConfig} />
      </Route>
      <Route path="/products">
        <ProductsPage />
      </Route>

      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
  )
}

export default unauthenticatedRoutes
