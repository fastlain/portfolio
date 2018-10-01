import React, {Component} from 'react';
import Project from './Project';

class ProjectsContainer extends Component {
    render() {
        return (
            <section>
                <h2>PROJECTS</h2>
                <Project />
                <Project />
                <Project />
            </section>
        );
    }
}

export default ProjectsContainer;