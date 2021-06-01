import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"

import Routes from "./Components/Routes/routers"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App
