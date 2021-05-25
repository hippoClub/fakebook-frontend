import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"

import Nav from "./Components/nav/nav"
import Routes from "./Routes/routers"

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Nav />
        </div>
        <Routes />
      </Router>
    </div>
  )
}

export default App
