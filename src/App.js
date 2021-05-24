import "./App.css"
import Nav from "./Components/nav/nav"
import Register from "./Components/register/register"
import Login from "./Components/login/login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Route exact path="/" component={Nav} />
        </div>

        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
