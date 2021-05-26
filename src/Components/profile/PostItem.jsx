import React, { useState } from "react"
import { Link } from "react-router-dom"

import More from "./more.svg"

const PostItem = ({ postItem, date }) => {
  const [open, setOpen] = useState(false)
  //Edit post
  console.log("postItem: ", postItem)
  //delete post
  const deletePost = async () => {}

  return (
    <div className="card" key={postItem.postId}>
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
            <div class="dropdown-wrapper">
              <ul class="dropdown-menu">
                <li class="dropdown-menu__item">
                  <Link href="#d" onClick={deletePost}>
                    Edit
                  </Link>
                </li>
                <li class="dropdown-menu__item">
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
      <div className="postDescription">
        <p>{PostItem.postDescription}</p>
      </div>
      <div className="imgPost">
        <img src={postItem.image} alt="" />
      </div>
    </div>
  )
}

export default PostItem
