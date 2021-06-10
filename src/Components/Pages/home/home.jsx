import React, { useState, useEffect } from "react"
import "./home.css"
import Nav from "../../Controls/nav/nav"
import MyLoader from "../../Controls/loading/loading"

const Home = () => {
  const [posts, setPosts] = useState([])
  const [date, setDate] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    setLoading(true)
    const result = await fetch(
      "https://backend-hippo-club.herokuapp.com/api/post/allPost"
    )
    const response = await result.json()
    setLoading(false)
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
    <>
      <div className="header">
        <Nav></Nav>
      </div>
      <div className="content_container">
        <div>
          <h2 className="title">Feed</h2>
          {/* card */}
          {loading ? (
            <MyLoader />
          ) : (
            posts.map((post) => {
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
                  <div className="card-header__postDescription">
                    <p>{post.postDescription}</p>
                  </div>
                  <div className="card-header__imgPost">
                    <img className="img" src={post.image} alt="" />
                  </div>
                </div>
              )
            })
          )}
          {/* end of card */}
        </div>
      </div>
    </>
  )
}

export default Home
