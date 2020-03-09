import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({  
  component: Component,
  ...rest
}) => {
  const isAuthenticated = !!useSelector(state => state.user.user)

  return (
    <Route {...rest} component={(props) => (
      !isAuthenticated ? (
        <>
          <Component {...props} />
        </>
      ) : (
        <Redirect to='/userpage' />
      )
    )}/>
  )
}

export default PublicRoute