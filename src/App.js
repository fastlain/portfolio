import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import ProjectsContainer from './ProjectsContainer';

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Banner />
        <About />
        <ProjectsContainer />
      </div>
    );
  }
}

export default App;
