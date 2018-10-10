import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import ProjectsContainer from './ProjectsContainer';
import Contact from './Contact';
import { Element } from 'react-scroll';
import Particles from 'react-particles-js';
import particleparams from './particlesConfig/particlesConfig7.json'

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Particles width="100%" height="100vh" params={particleparams} style={{position: "absolute"}}/>
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
