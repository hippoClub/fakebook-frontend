import "./App.css"
import Nav from "./Components/nav/nav"
import Register from "./Components/register/register"
import Login from "./Components/login/login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Components/home/home"

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Route exact path="/" component={Nav} />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/upload" component="/upload" />
          <Route path="/profile" component="/profile" />
        </Switch>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
