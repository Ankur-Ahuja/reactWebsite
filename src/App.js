import React, { Component } from 'react';

import './App.css';

import Navigation from './Navigation.js';

import HeroBlade from './HeroBlade.js';

import MediaComponent from './Media.js';
import Image from 'react-bootstrap/Image'

class App extends Component {


  render () {

    return (
      <div>

        <div className="App">
          {/* End of line comments  Shift  Alt F for indent */}

          {/* <Header />
          <Content />

          <Image src="holder.js/100px250" fluid /> */}

        </div>

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
       
        <MediaComponent />
      </div>
    );
  }
}


export default App;
