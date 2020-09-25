import React from 'react';
// import ReactDOM from 'react-dom';
import './index.scss';

class About extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "aboutComponent"
        }
    }
    render() {
        return (
            <div>
                {this.state.name}
            </div>
        )
    }
}
export default About;

