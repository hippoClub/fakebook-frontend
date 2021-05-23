import React from "react"
import "./massage.css"

const DisplayMassage = (props) => {
  console.log(props)
  return (
    <div className="massageContainer">
      <p>{props.massage}</p>
    </div>
  )
}

export default DisplayMassage
