import React from "react"
import { Redirect, Route } from "react-router-dom"
import { getId } from "../Utils/Common"

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !getId() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }}
    />
  )
}

export default PublicRoute
