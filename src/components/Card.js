import React from "react";

export default function Card(props) {
  let tagText

  if (props.openSpots === 0) {
    tagText = "SOLD OUT"
  } else if (props.location == "Online") {
    tagText = "Online"
  }


  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} />
        {tagText && <span>{tagText}</span>}
      </div>
      <div className="card-info">
        <p className="rating">
          <span class="material-symbols-rounded">star</span>
          {props.rating}
          <span className="opacity">({props.votes}) - {props.location}</span>
        </p>
        <p className="desc">{props.desc}</p>
        <p className="price"> <span className="bold">From {props.price}$</span> / session</p>
      </div>
    </div>
  )
}