'use strict';

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Landing from '../Landing/Landing';
import './App.scss';

export default class App extends React.Component {
  render(){
    return(
      <main className="app">
        <BrowserRouter>
          <nav>
            <ul>
            <li className="link"><Link to="/">Home</Link></li>
            <li className="link"><Link to="/dashboard">Create Task</Link></li>
            </ul>
          </nav>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/" component={Landing}/>
        </BrowserRouter>
      </main>);
  }
}