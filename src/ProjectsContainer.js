import React, {Component} from 'react';
import Project from './Project';
import './projectscontainer.css';

class ProjectsContainer extends Component {
    render() {
        return (
            <section>
                <Project />
                <Project />
                <Project />
            </section>
        );
    }
}

export default ProjectsContainer;