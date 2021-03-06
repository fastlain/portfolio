import React from 'react';
import styles from './About.module.css';
import data from './data/aboutdata';

const About = () => {
    let paragraphs = data.description.map((para, i) => <p key={i} className={styles.para} dangerouslySetInnerHTML={{ __html: para }}></p>);

    return (
        <section id="about" className={styles.aboutSection}>
            <h2>ABOUT</h2>
                <div className={styles.flexRow}>
                    <div className={styles.imgContainer}>
                        <img className={styles.headshot} src={data.headshot} alt="Michael Allain headshot" />
                        <p className={styles.tagLine}>{data.tagline}</p>
                    </div>
                    <div className={styles.flexCol}>
                        {paragraphs}
                    </div>
                </div>
        </section>
    );
}

export default About;