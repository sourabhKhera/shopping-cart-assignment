import React, { Fragment } from 'react'
import AuthenticatedRoutes from '../../routes/auth_routes'
import UnAuthenticatedRoutes from '../../routes/unauth_routes'

let Auth = false
const GateKeeper = () => {
  return Auth ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />
}

export default GateKeeper
