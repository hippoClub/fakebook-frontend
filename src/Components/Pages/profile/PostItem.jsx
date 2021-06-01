import React, { useState } from "react"
import { Link } from "react-router-dom"

import More from "./more.svg"

const PostItem = ({ postItem, date }) => {
  const [open, setOpen] = useState(false)

  //delete post
  const deletePost = async () => {
    const post_id = postItem.postId
    await fetch(`/api/post/delete/${post_id}`, {
      method: "DELETE",
    })

    window.location.reload()
  }

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header__avatar">
          <img src="https://source.unsplash.com/user/erondu/40x40" alt="" />
        </div>
        <div className="card-header__username">
          <span>
            <strong>
              {postItem.firstname} {postItem.lastname}
            </strong>
          </span>
          <br />
          <span>
            <small>{date}</small>
          </span>
        </div>
        <div className="card-header__moreBtn" onClick={() => setOpen(!open)}>
          <img src={More} alt="" />
          {open && (
            <div className="dropdown-wrapper">
              <ul className="dropdown-menu">
                <li className="dropdown-menu__item">
                  <Link to={`edit/${postItem.postId}`}>Edit</Link>
                </li>
                <li className="dropdown-menu__item">
                  <Link
                    className="dropdown-menu__item__link"
                    onClick={deletePost}
                  >
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="card-header__postDescription">
        <p>{postItem.postDescription}</p>
      </div>
      <div className="card-header__imgPost">
        <img src={postItem.image} className="img" alt="" />
      </div>
    </div>
  )
}

export default PostItem
