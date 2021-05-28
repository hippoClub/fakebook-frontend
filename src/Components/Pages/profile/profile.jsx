import React, { useState, useEffect } from "react"
import "./profile.css"
import PostItem from "./PostItem"

const Profile = (props) => {
  const [date, setDate] = useState("")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])
  // fetch all user post
  const fetchPosts = async () => {
    const id = localStorage.getItem("id")
    const result = await fetch(`http://localhost:8080/api/post/userPosts/${id}`)
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
        {posts.map((post) => (
          <PostItem postItem={post} date={date} key={post.postId} />
        ))}
      </div>
    </div>
  )
}

export default Profile
