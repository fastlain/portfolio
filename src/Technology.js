import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';
import styles from './Technology.module.css';

const Technology = ({tech}) => {
    let useHeadings = tech.length > 1;
    let techdata = tech.map(techGroup => {
        return (
            <div key={techGroup.category}>
                {useHeadings ? <h5 className={styles.catHeading}>{techGroup.category}</h5> : null}
                <ul className={styles.list}>
                    {techGroup.techs.map(tech => <li className={styles.techItem} key={tech}>{tech}</li>)}
                </ul>
            </div>
        );
    });

    return (
        <div>
            <h4 className={styles.techHeading}>
                <FontAwesomeIcon icon={faCode} className={styles.icon}/>
                    Technology
                <FontAwesomeIcon icon={faCode} className={styles.icon}/>
            </h4>
            <div className={styles.container}>
                {techdata}
            </div>
        </div>
    );
}

export default Technology;