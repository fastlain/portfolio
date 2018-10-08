import React, { Component } from 'react';
import styles from './Banner.module.css';
import Bounce from 'react-reveal/Bounce';
import Reveal from 'react-reveal/Reveal';

class Banner extends Component {
    render() {
      return (
        <section className={styles.banner}>
            <Bounce left duration={1500}>
              <h1 className={styles.mainHeading}>Michael Allain</h1>
            </Bounce>
            
            <Reveal effect={styles.growSeparator}>
              <div className={styles.separator}></div>
            </Reveal>
            <Bounce right duration={1500}>
              
              <h2 className={styles.subHeading}>FULL STACK WEB DEVELOPER</h2>
            </Bounce>
        </section>
      );
    }
  }
  
  export default Banner;
  