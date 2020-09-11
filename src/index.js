import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';
import Home from './Home';

const routing = (
  <Router>
    <Route path="/" component={App} />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
