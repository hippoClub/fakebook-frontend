import React, { useState, useEffect } from "react"
import "./home.css"

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const result = await fetch("http://localhost:8080/api/post/allPost")
    const response = await result.json()
    setPosts(response)
  }

  return (
    <div className="content_container">
      <div className="content">
        <h2 className="title">Feed</h2>
        {/* card */}
        {posts.map((post) => {
          return (
            <div className="card" key={post.postId}>
              <div className="card_avatar">
                <img
                  src="https://source.unsplash.com/user/erondu/40x40"
                  alt=""
                />
                <span>
                  <strong>
                    {post.firstname} {post.lastname} &nbsp;
                  </strong>
                </span>
                <span>
                  <small>-&nbsp; {post.createdAt}</small>
                </span>
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
