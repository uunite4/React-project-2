import React from "react";
import Group from "../images/img-group.png"

export default function Hero() {
  return (
    <div className="hero">
      <img src={Group} />
      <div className="title-cont">
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind
          <br />
          hosts—all without leaving home.</p>
      </div>
    </div>
  )
}