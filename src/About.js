import React, {Component} from 'react';
import styles from './About.module.css';
import data from './data/aboutdata';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';


class About extends Component {
    render() {

        let paragraphs = data.description.map((para, i) => <p key={i} className={styles.para}>{para}</p>);

        return (
            <section id="about">
                <h2>ABOUT</h2>
                <Fade right>
                    <div className={styles.flexRow}>
                        <div className={styles.imgContainer}>    
                            <RubberBand delay='1000'>
                                <img className={styles.headshot} src={data.headshot} alt="Michael Allain headshot"/>
                            </RubberBand>
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