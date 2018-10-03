import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.pageHeader}>
        <nav className={styles.flex}>
          <a href='#about' className={styles.navLink}>ABOUT</a>
          <a href='#projects' className={styles.navLink}>PROJECTS</a>
          <a href='#contact' className={styles.navLink}>CONTACT</a>
        </nav>
      </header>
    );
  }
}

export default Header;
