import React from "react"
import { Switch, Route } from "react-router-dom"
import PageNotFound from "../../Components/Pages/pageNotFound/PageNotFound"
import Home from "../../Components/Pages/home/home"
import Upload from "../../Components/Pages/upload/upload"
import EditPost from "../../Components/Pages/edit/edit"
import Profile from "../../Components/Pages/profile/profile"
import Register from "../../Components/Pages/register/register"
import Login from "../../Components/Pages/login/login"
import PrivateRoute from "./privateRoute"
import PublicRoute from "./publicRoute"

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute path="/upload" component={Upload} />
      <PrivateRoute path="/edit/:postId" component={EditPost} />
      <PrivateRoute path="/profile" component={Profile} />

      <PublicRoute path="/register" component={Register} />
      <PublicRoute path="/login" component={Login} />

      <Route component={PageNotFound} />
    </Switch>
  )
}

export default Routes
