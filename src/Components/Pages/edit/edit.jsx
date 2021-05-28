import React, { useState, useEffect } from "react"
import "../upload/upload.css"

const EditPost = (props) => {
  const [postDescription, setPostDescription] = useState(null)
  const [imgUrl, setImgUrl] = useState(null)
  const [postDesc, setPostDesc] = useState(null)
  const [img, setImg] = useState(null)

  useEffect(() => {
    populatePost()
  })

  const populatePost = async () => {
    const id = props.match.params.postId

    const result = await fetch(`http://localhost:8080/api/post/getPost/${id}`)
    const response = await result.json()
    setPostDesc(response.postDescription)
    console.log(postDescription)
    setImg(response.postImgUrl)
  }

  const uploadImage = async (e) => {
    const data = new FormData()
    const file = e.target.files
    data.append("file", file[0])
    data.append("upload_preset", "hippo-club")
    data.append("cloud_name", "djwimueuq")

    const result = await fetch(
      "https://api.cloudinary.com/v1_1/djwimueuq/image/upload",
      {
        method: "POST",
        body: data,
      }
    )
    const response = await result.json()
    setImgUrl(response.secure_url)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const submitPost = { imgUrl, postDescription }
    // console.log(postDescription)
    const id = props.match.params.postId
    await fetch(`http://localhost:8080/api/post/editPost/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(submitPost),
    })

    props.history.push("/profile")
  }

  return (
    <div className="content_container">
      <div className="content">
        <h2 className="title">Edit Post</h2>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="What do you have in mind?"
              wrap="on"
              limit="255"
              defaultValue={postDesc}
              onChange={(e) => setPostDescription(e.target.value)}
            ></textarea>
            <input
              type="file"
              accept="image/png, image/jpeg"
              file={img}
              onChange={uploadImage}
            />
            <br />
            <button type="submit" className="btn btn_custom">
              Post
            </button>
          </form>
        </div>
        <div className="card card-header__imgPost">
          <h3 className="prev">Image preview</h3>
          {img ? (
            <img src={img} className="img" alt="" />
          ) : (
            <div className="imgNotFound">
              <p>Image Not Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EditPost
