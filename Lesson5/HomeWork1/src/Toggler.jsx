import React, { Component } from 'react';
import './toggler.scss';

class Toggler extends Component {
    constructor(props) {
        super(props);
        this.state = {button: 'Off'};

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(){
        this.setState(state => ({
            button:!state.button
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick} className="toggler">
                {this.state.button ? 'Off' : 'On'}
            </button>
        );
    };
};

export default Toggler;