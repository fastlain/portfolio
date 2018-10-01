import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import Project from './Project';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Banner />
        <About />
        <Project />
        <Project />
        <Project />
      </div>
    );
  }
}

export default App;
