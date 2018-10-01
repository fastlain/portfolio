import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Banner />
        <About />
      </div>
    );
  }
}

export default App;
