import React, { Component } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll'

class Header extends Component {
	render() {
		return (
			<header className={styles.pageHeader}>
				<nav className={styles.flex}>
					<Link to="scrollAbout" smooth={true} duration={500}>
						<a href='#about' className={styles.navLink}>ABOUT</a>
					</Link>
					<Link to="scrollProjects" smooth={true} duration={500}>
						<a href='#projects' className={styles.navLink}>PROJECTS</a>
					</Link>
					<Link to="scrollContact" smooth={true} duration={500}>
						<a href='#contact' className={styles.navLink}>CONTACT</a>
					</Link>
				</nav>
			</header>
		);
	}
}

export default Header;