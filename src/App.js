import React, { Component } from 'react';

import './App.css';

import Navigation from './Navigation.js';

import HeroBlade from './HeroBlade.js';

import MediaComponent from './MediaComponent.js';
import Image from 'react-bootstrap/Image'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {


  render () {

    return (     

        <div className="App">
          {/* End of line comments  Shift  Alt F for indent */}
          <Content />
          <Header />
                 

        </div>
    );
  }
}




class Header extends Component {
  render () {
    return (
      <div>
        <header>
        <Navigation />
        </header>
      </div>

    );
  }
}
class Content extends Component {
  render () {
    return (
      <div>
        <HeroBlade />
      </div>
    );
  }
}


export default App;
