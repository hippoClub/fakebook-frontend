import React from "react"
import { NavLink, Link } from "react-router-dom"

import logo from "./logo.svg"
import "./nav.css"

const nav = () => {
  return (
    <div className="nav">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      {/* NavLink */}
      <div className="linkList">
        <NavLink className="listItem" activeClassName="active" to="/" exact>
          Home
        </NavLink>
        <NavLink className="listItem" activeClassName="active" to="/upload">
          Upload
        </NavLink>
        <NavLink className="listItem" activeClassName="active" to="/profile">
          Profile
        </NavLink>
      </div>
      <div className="avatar">
        <img src="https://source.unsplash.com/user/erondu/40x40" alt="" />
      </div>
    </div>
  )
}

export default nav
