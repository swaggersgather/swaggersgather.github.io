import React from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './components/introduction'
import BlogHighlight from './components/blog-highlight'
import Header from './components/header/header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Introduction></Introduction>
      <BlogHighlight></BlogHighlight>
    </div>
  );
}

export default App;
