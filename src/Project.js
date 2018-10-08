import React, {Component} from 'react';
import Technology from './Technology';
import styles from './Project.module.css';

class Project extends Component {
    render() {
        
        // Project layout will alternate between screenshot on left vs right
        let flexOrder;
        if (this.props.order === 0) {
            flexOrder = styles.flexLeft;
        } else {
            flexOrder = styles.flexRight;
        }
        
        return (
            <div className={styles.project}>
                <h3 className={styles.title}>{this.props.title}</h3>
                <div className={styles.flexRow}>
                    <div className={`${styles.imgContainer} ${flexOrder}`}>
                        <img className={styles.screenshot} src={this.props.screenshot} alt={this.props.title + " Screenshot"} />            
                    </div>
                    <div className={styles.flexCol}>
                        <p className={styles.para}>
                            {this.props.description}
                        </p>
                        <Technology tech={this.props.technology}/>
                        <div className={styles.btnCont}>
                            <a href={this.props.liveLink} target="_blank" rel="noopener noreferrer">
                                <button className={styles.btn} type="button">Live Demo</button>
                            </a>
                            <a href={this.props.gitHubLink} target="_blank" rel="noopener noreferrer">
                                <button className={styles.btn} type="button">GitHub Repo</button>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;