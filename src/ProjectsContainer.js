import React from 'react';
import Project from './Project';
import data from './data/projectdata';
import styles from './ProjectsContainer.module.css';

const ProjectsContainer = () => {
    return (
        <section id="projects" className={styles.container}>
            <h2>PROJECTS</h2>
            <div className={styles.wrapper}>
                {data.map((proj, i) => {
                    return <Project order={i%2} {...proj} key={proj.title}/>
                })}
            </div>
        </section>
    );
}

export default ProjectsContainer;