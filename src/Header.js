import React, { Component } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll'

class Header extends Component {
	render() {
		return (
			<header className={styles.pageHeader}>
				<nav className={styles.flex}>
					<Link to="scrollAbout" smooth={true} duration={500}>
						<span className={styles.navLink}>ABOUT</span>
					</Link>
					<Link to="scrollProjects" smooth={true} duration={500}>
						<span className={styles.navLink}>PROJECTS</span>
					</Link>
					<Link to="scrollContact" smooth={true} duration={500}>
						<span className={styles.navLink}>CONTACT</span>
					</Link>
				</nav>
			</header>
		);
	}
}

export default Header;