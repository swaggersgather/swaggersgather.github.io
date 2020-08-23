import React, { Component } from 'react'
import Carosel from "./home/carosel"
export default class BlogHighlight extends Component {
  render() {
    return (
        <div className="blog-highlight">
            <h2>Read the latest</h2>
            <div className="blog-highlight-container">
              <a className="blog-highlight-item" href="">
                <div className="blog-highlight-image" style={{backgroundImage: 'url(images/blog-table.jpeg)'}}></div>
                <span className="blog-highlight-item-label">
                  Birthday Celebration
                </span>
              </a>
              <a className="blog-highlight-item" href="">
                <div className="blog-highlight-image" style={{backgroundImage: 'url(images/blog-shelves.jpeg)'}}></div>
                <span className="blog-highlight-item-label">
                  Homeschool room remodel
                </span>
              </a>
              <a className="blog-highlight-item" href="">
                <div className="blog-highlight-image" style={{backgroundImage: 'url(images/blog-travel.jpeg)'}}></div>
                <span className="blog-highlight-item-label">
                Traveling Europe with kids
                </span>
              </a>
            </div>
            <div className="blog-highlight-container">
              <a className="blog-highlight-item" href="">
                <div className="blog-highlight-image" style={{backgroundImage: 'url(images/blog-swing.jpeg)'}}></div>
                <span className="blog-highlight-item-label">
                  Summer Reading List
                </span>
              </a>
              <a className="blog-highlight-item" href="">
                <div className="blog-highlight-image" style={{backgroundImage: 'url(images/blog-homeschool-room.jpeg)'}}></div>
                <span className="blog-highlight-item-label">
                  Sustainable Clothing
                </span>
              </a>
              <a className="blog-highlight-item" href="">
                <div className="blog-highlight-image" style={{backgroundImage: 'url(images/blog-travel-croatia.jpeg)'}}></div>
                <span className="blog-highlight-item-label">
                Croatia with kids
                </span>
              </a>
            </div>
        </div>
    )
  }
}