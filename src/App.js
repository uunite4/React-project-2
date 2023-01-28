import React from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Card from "./components/Card";

import data from "./data"

export default function App() {

  const cardElem = data.map(obj => {
    return (
      <Card
        key={obj.id}
        {...obj}
      />
    )
  })

  return (
    <div className="wrapper">
      <Nav />
      <Hero />
      <div className="cards-cont">
        {cardElem}
      </div>
    </div>
  )
}