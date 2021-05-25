import React from "react"
import "./upload.css"

const Upload = () => {
  return (
    <div className="content_container">
      <div className="content">
        <h2 className="title">Upload</h2>
        <div className="card">
          <form action="">
            <textarea
              name="post description"
              placeholder="What do you have in mind?"
              wrap="on"
              limit="255"
            ></textarea>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/png, image/jpeg"
            />
            <br />
            <button type="submit" className="btn btn_custom">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Upload
