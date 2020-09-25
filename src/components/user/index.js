import React from 'react';
// import ReactDOM from 'react-dom';
import './index.scss';

class User extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "userComponent"
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
export default User;

