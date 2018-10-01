import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.pageHeader}>
        <nav>
          <a href='#' className={styles.navLink}>ABOUT</a>
          <a href='#' className={styles.navLink}>PROJECTS</a>
          <a href='#' className={styles.navLink}>CONTACT</a>
        </nav>
      </header>
    );
  }
}

export default Header;
