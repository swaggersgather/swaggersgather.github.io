import React, { Component } from 'react'
import Carosel from "./home/carosel"
import blog1 from "./blog/content/blog-shelves.jpeg"
import blog2 from "./blog/content/blog-table.jpeg"
import blog3 from "./blog/content/blog-travel.jpeg"
import blog4 from "./blog/content/blog-swing.jpeg"
import blog5 from "./blog/content/blog-travel-croatia.jpeg"
import blog6 from "./blog/content/blog-homeschool-room.jpeg"

export default class BlogHighlight extends Component {
  render() {
    return (
        <div className="blog-highlight">
            <h2>Read the latest</h2>
            <div className="blog-highlight-container">
              <a className="blog-highlight-item" href="">
                <div className="blog-highlight-image" style={{backgroundImage: "url(" + blog2 + ")"}}></div>
                <span className="blog-highlight-item-label">
                  Birthday Celebration
                </span>
              </a>
              <a className="blog-highlight-item" href="">
                <div className="blog-highlight-image" style={{backgroundImage: "url(" + blog6 + ")"}}></div>
                <span className="blog-highlight-item-label">
                  Homeschool room remodel
                </span>
              </a>
              <a className="blog-highlight-item" href="">
                <div className="blog-highlight-image" style={{backgroundImage: "url(" + blog3 + ")"}}></div>
                <span className="blog-highlight-item-label">
                Traveling Europe with kids
                </span>
              </a>
            </div>
            <div className="blog-highlight-container">
              <a className="blog-highlight-item" href="">
                <div className="blog-highlight-image" style={{backgroundImage: "url(" + blog1 + ")"}}></div>
                <span className="blog-highlight-item-label">
                  Summer Reading List
                </span>
              </a>
              <a className="blog-highlight-item" href="">
                <div className="blog-highlight-image" style={{backgroundImage: "url(" + blog4 + ")"}}></div>
                <span className="blog-highlight-item-label">
                  Sustainable Clothing
                </span>
              </a>
              <a className="blog-highlight-item" href="">
                <div className="blog-highlight-image" style={{backgroundImage: "url(" + blog5 + ")"}}></div>
                <span className="blog-highlight-item-label">
                Croatia with kids
                </span>
              </a>
            </div>
        </div>
    )
  }
}