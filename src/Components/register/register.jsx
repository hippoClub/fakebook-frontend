import React, { useState } from "react"
import { Link } from "react-router-dom"

import "./register.css"
import DisplayMassage from "../massage/massage"
import Logo from "../60x60.svg"
import { setUserSession } from "../../Utils/Common.js"

const Register = () => {
  const [firstname, setFistName] = useState(null)
  const [lastname, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [massage, setMassage] = useState(null)

  const submitForm = async (e) => {
    e.preventDefault()

    let registerInfo = { firstname, lastname, email, password }
    let result = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(registerInfo),
    })
    let response = await result.json()

    let userInfo = {
      userId: response.userId,
      firstname: response.firstname,
      lastname: response.lastname,
      email: response.email,
    }

    setUserSession(response.authToken, userInfo)
  }

  return (
    <div className="container">
      {massage ? <DisplayMassage massage={massage} /> : ""}
      <div className="card_above">
        <div className="Logo">
          <img src={Logo} alt="Logo" />
        </div>

        <form onSubmit={submitForm}>
          <div className="form-group">
            <label htmlFor="firstname">Firstname</label>
            <br />
            <input
              type="text"
              placeholder="John"
              required
              onChange={(e) => setFistName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">Lastname</label>
            <br />
            <input
              type="text"
              placeholder="Doe"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              placeholder="john@doe.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              placeholder="**********"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn">
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div className="card_bellow">
        <p>Have an account?</p>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
    </div>
  )
}

export default Register
