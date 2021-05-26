import React, { useState, useEffect } from "react"
import "./profile.css"
import More from "./more.svg"
import { Link } from "react-router-dom"

const Profile = () => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState("")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const id = localStorage.getItem("id")
    const result = await fetch(
      `http://localhost:8080/api/post//userPosts/${id}`
    )
    const response = await result.json()
    setPosts(response)
    response.map((res) => {
      const selectDate = res.createdAt
      const convertDate = new Date(selectDate)
        .toJSON()
        .slice(0, 19)
        .replace("T", " ")
      return setDate(convertDate)
    })
  }

  return (
    <div className="content_container">
      <div className="content">
        <h2 className="title">Profile</h2>
        {/* Beginning card */}
        {posts.map((post) => {
          return (
            <div className="card" key={post.postId}>
              <div className="card-header">
                <div className="card-header__avatar">
                  <img
                    src="https://source.unsplash.com/user/erondu/40x40"
                    alt=""
                  />
                </div>
                <div className="card-header__username">
                  <span>
                    <strong>
                      {post.firstname} {post.lastname}
                    </strong>
                  </span>
                  <br />
                  <span>
                    <small>{date}</small>
                  </span>
                </div>
                <div
                  className="card-header__moreBtn"
                  onClick={() => setOpen(!open)}
                >
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
                </div>
              </div>
              <div className="postDescription">
                <p>{post.postDescription}</p>
              </div>
              <div className="imgPost">
                <img src={post.image} alt="" />
              </div>
            </div>
          )
        })}
        {/* end of card */}
      </div>
    </div>
  )
}

export default Profile
