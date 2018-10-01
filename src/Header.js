import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className='pageHeader'>
        <nav className='navFlex'>
          <a href='#' className='navLink'>ABOUT</a>
          <a href='#' className='navLink'>PROJECTS</a>
          <a href='#' className='navLink'>CONTACT</a>
        </nav>
      </header>
    );
  }
}

export default Header;
