import React from "react"
import Nav from "../../Controls/nav/nav"
import Img from "./img.png"
import "./pageNotFound.css"

const PageNotFound = () => {
  return (
    <>
      <div className="header">
        <Nav />
      </div>
      <div className="content-container">
        <div className="content">
          <img
            src={Img}
            className="img_not_found"
            alt="A man with a Space suite"
            style={{ width: "50%" }}
          />
          <h1 style={{ color: "var(--primary-clr)" }}>404</h1>
          <h3>Page not found</h3>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
