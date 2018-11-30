import React from 'react';
import styles from './Banner.module.css';
import Bounce from 'react-reveal/Bounce';
import Reveal from 'react-reveal/Reveal';
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.wrapper}>
                <Bounce left duration={1500}>
                    <h1 className={styles.mainHeading}>Michael Allain</h1>
                </Bounce>

                <Reveal effect={styles.growSeparator}>
                    <div className={styles.separator}></div>
                </Reveal>

                <Bounce right duration={1500}>
                    <h2 className={styles.subHeading}>FULL STACK WEB DEVELOPER</h2>
                </Bounce>
            </div>
            <div className={styles.downBtn} >
                <Link to="scrollAbout" smooth={true} duration={500} offset={-25} tabIndex={4}>
                    <FontAwesomeIcon icon={faChevronDown} className={styles.downBtnIcon} title={`Scroll to "About Section"`} />
                </Link>
            </div>
        </section>
    );
}

export default Banner;
