import React, { Fragment } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Register from '../containers/register'
import HomePage from '../containers/home-page'

import {
  registerConfig,
  loginConfig,
} from '../components_config/login_register'

const unauthenticatedRoutes = () => {
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
    </Switch>
  )
}

export default unauthenticatedRoutes
