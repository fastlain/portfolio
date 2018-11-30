import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ContactLink.module.css';

class ContactLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false
        }
    }

    handleHover = () => {
        this.setState({
            isHovered: !this.state.isHovered
        });
    }

    render() {
        // set CSS class for link based on hover state
        const hoverClass = this.state.isHovered ? `${styles.linkText} ${styles.hoveredLinkText}` : styles.linkText;

        return (
            <div className={styles.contact} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <a className={styles.link} href={this.props.linkTarget} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={this.props.icon} fixedWidth className={styles.icon} />
                    <span className={hoverClass}>{this.props.label}</span>
                </a>
            </div>
        )
    }
}

export default ContactLink;