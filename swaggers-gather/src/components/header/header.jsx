import React, { Component } from 'react'
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <div className="header-upper">

        </div>
        <div className="header-middle">
            SWAGGERS GATHER
        </div>
        <div className="header-lower">
          <a className="header-link" href="">
            HOMESCHOOL
          </a>
          <a className="header-link" href="">
            HOMEMAKING
          </a>
          <a className="header-link" href="">
            TRAVEL
          </a>
        </div>
      </div>
    )
  }
}