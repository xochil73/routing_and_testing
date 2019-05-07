'use strict';

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Landing from '../Landing/Landing';

export default class App extends React.Component {
  render(){
    return(
      <main>
        <BrowserRouter>
          <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Create Task</Link></li>
            </ul>
          </nav>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/" component={Landing}/>
        </BrowserRouter>
      </main>);
  }
}