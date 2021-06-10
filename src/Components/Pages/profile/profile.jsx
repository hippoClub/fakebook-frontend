import React, { useState, useEffect } from "react"
import "./profile.css"
import PostItem from "./PostItem"
import Nav from "../../Controls/nav/nav"
import MyLoader from "../../Controls/loading/loading"

const Profile = () => {
  const [date, setDate] = useState("")
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])
  // fetch all user post
  const fetchPosts = async () => {
    setLoading(true)
    const id = localStorage.getItem("id")
    const result = await fetch(
      `https://backend-hippo-club.herokuapp.com/api/post/userPosts/${id}`
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
        <Nav />
      </div>
      <div className="content_container">
        <div>
          <h2 className="title">Profile</h2>
          {loading ? (
            <MyLoader />
          ) : (
            posts.map((post) => (
              <PostItem postItem={post} date={date} key={post.postId} />
            ))
          )}
          {posts.length === 0 && <div>You don't have any post</div>}
        </div>
      </div>
    </>
  )
}

export default Profile
