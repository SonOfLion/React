import React from 'react';

class Toggler extends React.Component {
    constructor(props) {
    super(props);
    this.state = {buton:'Off'};

    this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    this.setState(state => ({
        isToggleOn: !state.isToggleOn
    }));
    }

    render() {
    return (
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'On' : 'Off'}
        </button>
    );
    }
}

export default Toggler;