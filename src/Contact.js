import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';


import styles from './Contact.module.css';
import data from './data/contactdata';

class Contact extends Component {
    render() {
        return (
            <section id="contact" className={styles.contactSection}>
                <h2>CONTACT</h2>
                <ul className={styles.contactList}>
                    <li className={styles.contact}>
                        <a className={styles.link} href={`mailto:${data.email}?subject=Reaching%20out%20from%20your%20portfolio`} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                            Email
                        </a>                
                    </li>
                    <li className={styles.contact}>
                        <a className={styles.link} href={data.linkedInLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className={styles.icon}/>
                            LinkedIn
                        </a>                
                    </li>
                    <li className={styles.contact}>
                        <a className={styles.link} href={data.gitHubLink}target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithubSquare} className={styles.icon}/>
                            GitHub
                        </a>                
                    </li>
                </ul>
            </section>
        );
    }
}

export default Contact;