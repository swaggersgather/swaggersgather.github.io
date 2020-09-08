import React, { Component } from 'react'
import "./home.css"
import carousel1 from "../blog/content/carousel.jpg"

export default class Carousel extends Component {
  render() {
    return (
      <div className="carousel-main" style={{backgroundImage: "url(" + carousel1 + ")"}}>
          
      </div>
    )
  }
}