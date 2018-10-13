import React from 'react';
import Project from './Project';
import data from './data/projectdata';
import Bounce from 'react-reveal/Bounce';
import styles from './ProjectsContainer.module.css';

const ProjectsContainer = () => {
    let projects = data.map((proj, i) => {
        let bounceside = i%2 === 0;
        return (
            <Bounce left={bounceside} right={!bounceside} key={i}>
                <Project order={i%2} {...proj}/>
            </Bounce>
        );
    });

    return (
        <section id="projects" className={styles.container}>
            <h2>PROJECTS</h2>
            <div className={styles.wrapper}>
                {projects}
            </div>
        </section>
    );
}

export default ProjectsContainer;