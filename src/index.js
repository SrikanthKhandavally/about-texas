import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Facts from './Components/Facts';
import About from './Components/About';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Header from './Components/Header'
const routing = (
  <Router>
    <div>
      <Header />
      <hr />
    {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/facts">Facts</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
    </ul> */}
      <Route exact path="/" component={About} />
      <Route path="/about" component={About} />
      <Route path="/facts" component={Facts} />
    </div>
  </Router>
)

ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
