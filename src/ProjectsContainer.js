import React, {Component} from 'react';
import Project from './Project';
import data from './data/projectdata';

class ProjectsContainer extends Component {
    render() {

        let projects = data.map((proj, i) =>
            <Project key={i} title={proj.title} description={proj.description} liveLink={proj.liveLink} gitHubLink={proj.gitHubLink} screenshot={proj.screenshot} />
        )

        return (
            <section id="projects">
                <h2>PROJECTS</h2>
                {projects}
            </section>
        );
    }
}

export default ProjectsContainer;