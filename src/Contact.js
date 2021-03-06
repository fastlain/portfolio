import React, { Component } from 'react';
import ContactLink from './ContactLink'
import Fade from 'react-reveal/Fade';
import { animateScroll as scroll } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import styles from './Contact.module.css';
import data from './data/contactdata';

class Contact extends Component {

    scrollToTop = () => {
        scroll.scrollToTop({ duration: 500 });
    }

    render() {
        return (
            <section id="contact" className={styles.contactSection}>
                <h2>CONTACT</h2>
                <div className={styles.contactList}>
                    <Fade left>
                        <ContactLink linkTarget={`mailto:${data.email}?subject=Reaching%20out%20from%20your%20portfolio`} icon={faEnvelope} label="Email" />
                    </Fade>
                    <Fade left delay={100}>
                        <ContactLink linkTarget={data.linkedInLink} icon={faLinkedin} label="LinkedIn" />
                    </Fade>
                    <Fade left delay={200}>
                        <ContactLink linkTarget={data.gitHubLink} icon={faGithubSquare} label="GitHub" />
                    </Fade>
                </div>
                <button onClick={this.scrollToTop} className={styles.topButton}>
                    <FontAwesomeIcon icon={faChevronUp} className={styles.icon} />
                    TOP
                </button>

            </section>
        );
    }
}

export default Contact;