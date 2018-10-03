import React, {Component} from 'react';
import styles from './Project.module.css';

class Project extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.project}>
                <h3 className={styles.title}>{this.props.title}</h3>
                <div className={styles.flexRow}>
                    <div className={styles.imgContainer}>
                        <img className={styles.screenshot} src={this.props.screenshot} alt={this.props.title + " Screenshot"} />            
                    </div>
                    <div className={styles.flexCol}>
                        <p className={styles.para}>
                            {this.props.description}
                        </p>
                        <div className={styles.btnCont}>
                            <button className={styles.btn} type="button">
                                <a href={this.props.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </button>
                            <button className={styles.btn} type="button">
                                <a href={this.props.gitHubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;