import React, { Fragment } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Register from '../containers/register'

import {
  registerConfig,
  loginConfig,
} from '../components_config/login_register'

const unauthenticatedRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/register" />
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
