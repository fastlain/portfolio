import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import ProjectsContainer from './ProjectsContainer';
import Contact from './Contact';
import { Element } from 'react-scroll';

class App extends Component {
	render() {
		return (
			<div >
				<Header />
				<Banner />
				<Element name="scrollAbout">
					<About />
				</Element>
				<Element name="scrollProjects">
					<ProjectsContainer />
				</Element>
				<Element name="scrollContact">
					<Contact />
				</Element>
			</div>
		);
	}
}

export default App;
