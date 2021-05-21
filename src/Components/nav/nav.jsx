import React from "react"

import logo from "./logo.svg"
import searchIcon from "./search.svg"
import "./nav.css"

const nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="search_bar">
        <input type="text" placeholder="Search" />
        <img src={searchIcon} alt="search" />
      </div>
    </nav>
  )
}

export default nav
