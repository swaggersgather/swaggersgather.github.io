import React, { Component } from 'react'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedin,
//   faTwitter,
//   faGithub,
//   faMedium,
//   faInstagram
// } from "@fortawesome/free-brands-svg-icons";
import './header.css';
import igLogo from './content/ig.jpg'
import aLogo from './content/amazon.jpg'
import pLogo from './content/pinterest.jpg'


export default class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <div className="header-upper">
          <a className="header-link small" href="https://www.pinterest.com/swaggersgather" target="_blank" title="Pinterest Profile">
            <img className="header-logo" src={pLogo}></img>
          </a>
          <a className="header-link small" href="https://amazon.com/shop/swaggers.gather" target="_blank" title="Amazon Shop">
            <img className="header-logo" src={aLogo}></img>
          </a>
          <a className="header-link small" href="https://instagram.com/swaggers.gather" target="_blank" title="Instagram Profile">
            <img className="header-logo" src={igLogo}></img>
          </a>
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