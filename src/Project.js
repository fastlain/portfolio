import React from 'react';
import Technology from './Technology';
import styles from './Project.module.css';

const Project = (props) => { 
    // Project layout will alternate between screenshot on left vs right
    let flexOrder;
    if (props.order === 0) {
        flexOrder = styles.flexLeft;
    } else {
        flexOrder = styles.flexRight;
    }
    
    return (
        <div className={styles.project}>
            <h3 className={styles.title}>{props.title}</h3>
            <div className={styles.flexRow}>
                <div className={`${styles.imgContainer} ${flexOrder}`}>
                    <img className={styles.screenshot} src={props.screenshot} alt={props.title + " Screenshot"} />            
                </div>
                <div className={styles.flexCol}>
                    <p className={styles.para}>
                        {props.description}
                    </p>
                    <Technology tech={props.technology}/>
                    <div className={styles.btnCont}>
                        <a href={props.liveLink} target="_blank" rel="noopener noreferrer">
                            <button className={styles.btn} type="button">Live Demo</button>
                        </a>
                        <a href={props.gitHubLink} target="_blank" rel="noopener noreferrer">
                            <button className={styles.btn} type="button">GitHub Repo</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;