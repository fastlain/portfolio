import React, {Component} from 'react';
import ContactLink from './ContactLink'

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
                    <ContactLink linkTarget={`mailto:${data.email}?subject=Reaching%20out%20from%20your%20portfolio`} icon={faEnvelope} label="Email" />
                    <ContactLink linkTarget={data.linkedInLink} icon={faLinkedin} label="LinkedIn" />  
                    <ContactLink linkTarget={data.gitHubLink} icon={faGithubSquare} label="GitHub" />           
                </ul>
            </section>
        );
    }
}

export default Contact;