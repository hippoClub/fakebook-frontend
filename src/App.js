import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Nav from "./Components/nav/nav"
import Register from "./Components/register/register"
import Login from "./Components/login/login"
import Home from "./Components/home/home"
import Upload from "./Components/upload/upload"
import Profile from "./Components/profile/profile"

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Nav />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/upload" component={Upload} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
