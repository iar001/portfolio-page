import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactForm2 from './components/ContactForm2';
import AOS from 'aos';
import 'aos/dist/aos.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount=()=>{
    AOS.init({
      duration: 600,
    });
}

  render() {
    return (
      <div className="App" >
        <NavBar />
        <Portfolio />
        {/* <AboutMe /> */}
        <ContactForm />
        <ContactForm2 />

      </div>
    );
  }

}

export default App;
