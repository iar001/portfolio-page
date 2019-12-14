import React from 'react';
import ReactDOM from 'react-dom';
// import { faCarrot } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css'



ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));
