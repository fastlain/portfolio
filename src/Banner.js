import React, { Component } from 'react';
import styles from './Banner.module.css';
import Fade from 'react-reveal/Fade';

class Banner extends Component {
    render() {
      return (
        <section className={styles.banner}>
            <Fade bottom duration='1500'>
              <h1 className={styles.mainHeading}>Michael Allain</h1>
            </Fade>
            
            <Fade duration='2000' delay='1500'>
              <div className={styles.separator}></div>
              <h2 className={styles.subHeading}>FULL STACK WEB DEVELOPER</h2>
            </Fade>
        </section>
      );
    }
  }
  
  export default Banner;
  