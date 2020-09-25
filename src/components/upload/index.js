import React from 'react';
// import ReactDOM from 'react-dom';
import './index.scss';

class Upload extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "uploadComponent"
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
export default Upload;

