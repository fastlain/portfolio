import React, {Component} from 'react';
import styles from './About.module.css';
import data from './data/aboutdata';
import Fade from 'react-reveal/Fade';
// import Fade from 'react-reveal/Fade';


class About extends Component {
    render() {

        let paragraphs = data.description.map((para, i) => <p key={i} className={styles.para}>{para}</p>);

        return (
            <section id="about" className={styles.aboutSection}>
                <h2>ABOUT</h2>
                <Fade right>
                    <div className={styles.flexRow}>
                        <div className={styles.imgContainer}>    
                            <Fade delay={1000}>
                                <img className={styles.headshot} src={data.headshot} alt="Michael Allain headshot"/>
                            </Fade>
                            <p className={styles.tagLine}>{data.tagline}</p>
                        </div>
                        <div className={styles.flexCol}>
                            {paragraphs}
                        </div>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default About;