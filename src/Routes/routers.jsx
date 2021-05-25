import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
import PageNotFound from "../Components/404/pageNotFound"
import Home from "../Components/home/home"
import Upload from "../Components/upload/upload"
import Profile from "../Components/profile/profile"
import Register from "../Components/register/register"
import Login from "../Components/login/login"
import PrivateRoute from "./privateRoute"
import PublicRoute from "./publicRoute"

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/upload" component={Upload} />
      <PrivateRoute path="/profile" component={Profile} />

      <PublicRoute path="/register" component={Register} />
      <PublicRoute path="/login" component={Login} />

      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Routes
