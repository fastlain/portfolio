import React, {Component} from 'react';
import Project from './Project';
import './projectscontainer.css';

class ProjectsContainer extends Component {
    render() {
        return (
            <div>
                <Project />
                <Project />
                <Project />
            </div>
        );
    }
}

export default ProjectsContainer;