import React from "react"
import "./home.css"

const Home = () => {
  return (
    <div className="content_container">
      <div className="content">
        <h2 className="title">Feed</h2>
        {/* card */}
        <div className="card">
          <div className="card_avatar">
            <img src="https://source.unsplash.com/user/erondu/40x40" alt="" />
            <span>
              <strong>Khalid Ibrahim &nbsp;</strong>
            </span>
            <span>
              <small>-&nbsp; 24/05/2021</small>
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

export default Home
