import React, {Component} from 'react';
import './contact.css';

class Contact extends Component {
    render() {
        return (
            <section>
                <h2>CONTACT</h2>
                <div className="contact">
                    <a href="mailto:michaeldallain@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>                
                </div>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/allainm/" target="_blank" rel="noopener noreferrer">LinkedIn</a>                
                </div>
                <div className="contact">
                    <a href="https://github.com/fastlain" target="_blank" rel="noopener noreferrer">GitHub</a>                
                </div>
            </section>
        );
    }
}

export default Contact;