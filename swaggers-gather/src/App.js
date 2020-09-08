import React from 'react';
import './App.css';
import Introduction from './components/introduction'
import BlogHighlight from './components/blog-highlight'
import Header from './components/header/header'
import BlogPage from './components/blog/blog-page';
import { Switch, Route } from 'react-router-dom';

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
    </div>
  );
}

export default App;
