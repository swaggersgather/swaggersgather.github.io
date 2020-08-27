import Header from '../header/header'
import React, { Component } from 'react'
export default class BlogPage extends Component {
  render() {
    const post = require('./posts/post1.json');
    console.log(post.body);
    return (
        <div className="blog-page">
            <h2 className="blog-title" dangerouslySetInnerHTML={{ __html: post.title }} ></h2>
            <div className="blog-body" dangerouslySetInnerHTML={{ __html: post.body }} ></div>
        </div>
    );
  }
}
