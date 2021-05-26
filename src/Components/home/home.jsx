import React, { useState, useEffect } from "react"
import "./home.css"

const Home = () => {
  const [posts, setPosts] = useState([])
  const [date, setDate] = useState("")

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const result = await fetch("http://localhost:8080/api/post/allPost")
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
        <h2 className="title">Feed</h2>
        {/* card */}
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

export default Home
