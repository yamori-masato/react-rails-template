import React, { FC } from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'
import { useAuth } from './AuthProvider'

const PrivateRoute: FC<RouteProps> = ({ component: RouteComponent, ...options }) => {
  const { currentUser, authCheck } = useAuth()
  if (!authCheck) return <></>
  return currentUser ?
    <Route {...options} component={RouteComponent} /> :
    <Redirect to='/login' />
}

export default PrivateRoute
