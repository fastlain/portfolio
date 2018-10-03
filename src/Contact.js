import React, {Component} from 'react';
import styles from './Contact.module.css';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <h2>CONTACT</h2>
                <div className={styles.contact}>
                    <a href="mailto:michaeldallain@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>                
                </div>
                <div className={styles.contact}>
                    <a href="https://www.linkedin.com/in/allainm/" target="_blank" rel="noopener noreferrer">LinkedIn</a>                
                </div>
                <div className={styles.contact}>
                    <a href="https://github.com/fastlain" target="_blank" rel="noopener noreferrer">GitHub</a>                
                </div>
            </section>
        );
    }
}

export default Contact;