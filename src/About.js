import React, {Component} from 'react';
import styles from './About.module.css';
import data from './data/aboutdata';

class About extends Component {
    render() {

        let paragraphs = data.description.map((para, i) => <p key={i} className={styles.para}>{para}</p>);

        return (
            <section id="about">
                <h2>ABOUT</h2>
                <div className={styles.flexRow}>
                    <div className={styles.imgContainer}>    
                        <img className={styles.headshot} src={data.headshot} alt="Michael Allain headshot"/>
                    </div>
                    <div className={styles.flexCol}>
                        <p className={styles.tagLine}>{data.tagline}</p>
                        {paragraphs}
                    </div>
                </div>
            </section>
        );
    }
}

export default About;