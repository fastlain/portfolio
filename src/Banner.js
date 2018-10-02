import React, { Component } from 'react';
import styles from './Banner.module.css';

class Banner extends Component {
    render() {
      return (
        <section className={styles.banner}>
            <h1>Michael Allain</h1>
            <div className={styles.separator}></div>
            <h2>FULL STACK WEB DEVELOPER</h2>
        </section>
      );
    }
  }
  
  export default Banner;
  