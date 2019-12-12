import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App" >
        <NavBar />
      </div>
    );
  }

}

export default App;
