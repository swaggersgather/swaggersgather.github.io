import React from 'react';
import './App.css';
import Introduction from './components/introduction'
import BlogHighlight from './components/blog-highlight'
import Header from './components/header/header'
import BlogPage from './components/blog/blog-page';
import { Switch, Route } from 'react-router-dom';
import igLogo from './components/header/content/ig.jpg'
import aLogo from './components/header/content/amazon.jpg'
import pLogo from './components/header/content/pinterest.jpg'

//import Home from '../pages/Home';
//import Signup from '../pages/Signup';

// const Main = () => {
//   return (
//     <Switch> {/* The Switch decides which component to show based on the current URL.*/}
//       <Route exact path='/' component={Home}></Route>
//       <Route exact path='/signup' component={Signup}></Route>
//     </Switch>
//   );
// }
// function App() {
//   return (
//     <div className="App">
//       <Main />
//     </div>
//   );
// }
// export default Main;
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Introduction></Introduction>
      <BlogHighlight></BlogHighlight>
      <BlogPage></BlogPage>
      <div className="footer">
      <a className="footer-link" href="https://www.pinterest.com/swaggersgather" target="_blank" title="Pinterest Profile">
            <img className="footer-logo" src={pLogo}></img>
          </a>
          <a className="footer-link" href="https://amazon.com/shop/swaggers.gather" target="_blank" title="Amazon Shop">
            <img className="footer-logo" src={aLogo}></img>
          </a>
          <a className="footer-link" href="https://instagram.com/swaggers.gather" target="_blank" title="Instagram Profile">
            <img className="footer-logo" src={igLogo}></img>
          </a>
      </div>
    </div>
  );
}

export default App;
