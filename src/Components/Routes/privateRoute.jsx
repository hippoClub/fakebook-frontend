import React from "react"
import { Redirect, Route } from "react-router-dom"
import { getId } from "../Utils/Common"

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return getId() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
