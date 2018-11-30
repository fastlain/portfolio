import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import ProjectsContainer from './ProjectsContainer';
import Contact from './Contact';
import { Element } from 'react-scroll';
import Particles from 'react-particles-js';
import particleparams from './particlesConfig/particlesConfig4.json'

class App extends Component {
    constructor() {
        super();
        this.state = {
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight
        };
    }

    updateScreenDimensions = () => {
        this.setState({ screenWidth: window.innerWidth, screenHeight: window.innerHeight });
    }

    componentDidMount = () => {
        this.updateScreenDimensions();
        window.addEventListener("resize", this.updateScreenDimensions);
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateScreenDimensions);
    }

    render() {
        // Dynamically adjust number of particles in banner background based on screen size
        const screenArea = this.state.screenHeight * this.state.screenWidth;
        const numParticles = screenArea / 8000;
        particleparams.particles.number.value = Math.floor(numParticles);

        return (
            <main>
                <Header />
                <Particles width="100%" height="100vh" params={particleparams} style={{ position: "absolute" }} />
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
            </main>
        );
    }
}

export default App;
