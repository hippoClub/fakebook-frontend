import React, { useState, useRef } from "react"
import "./profile.css"
import More from "./more.svg"
import { Link } from "react-router-dom"

const Profile = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="content_container">
      <div className="content">
        <h2 className="title">Profile</h2>
        <div className="card">
          <div className="card_avatar">
            <img src="https://source.unsplash.com/user/erondu/40x40" alt="" />
            <span>
              <strong>Khalid Ibrahim &nbsp;</strong>
            </span>
            <span>
              <small>-&nbsp; 24/05/2021</small>
            </span>

            <span className="more" onClick={() => setOpen(!open)}>
              <img src={More} alt="" />
              {open && (
                <div class="dropdown-wrapper">
                  <ul class="dropdown-menu">
                    <li class="dropdown-menu__item">
                      <a href="#d">Edit</a>
                    </li>
                    <li class="dropdown-menu__item">
                      <a href="fasd">Delete</a>
                    </li>
                  </ul>
                </div>
              )}
            </span>
          </div>
          <div className="postDescription">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium necessitatibus repellendus fugit sequi alias. Amet
              maxime beatae recusandae ullam ipsam nam est unde repellendus
              quidem totam, rerum aut corporis culpa.
            </p>
          </div>
          <div className="imgPost">
            <img src="https://source.unsplash.com/user/erondu/" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
