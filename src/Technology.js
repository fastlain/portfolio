import React, {Component} from 'react';
//import styles from './Technology.module.css';

class Technology extends Component {
    render() {
        
        console.log(this.props.tech)

        let techdata = this.props.tech.map(techGroup => {
            return (
                <div key={techGroup.category}>
                    <h4>{techGroup.category}</h4>
                    <ul>
                        {techGroup.techs.map(tech => <li key={tech}>{tech}</li>)}
                    </ul>
                </div>
            );
        });

        return (
            <div>
                {techdata}
            </div>
        );
    }
}

export default Technology;