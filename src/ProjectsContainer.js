import React, {Component} from 'react';
import Project from './Project';
import data from './data/projectdata';
import Bounce from 'react-reveal/Bounce';

class ProjectsContainer extends Component {
    render() {

        let projects = data.map((proj, i) => {
            let bounceside = i%2 === 0;
            return (
                <Bounce left={bounceside} right={!bounceside}>
                    <Project key={i} order={i%2} {...proj}/>
                </Bounce>
            );
        });

        return (
            <section id="projects" style={{overflow: 'hidden'}}>
                <h2>PROJECTS</h2>
                {projects}
            </section>
        );
    }
}

export default ProjectsContainer;