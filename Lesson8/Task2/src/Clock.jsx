import React, {Component} from 'react';
import moment from 'moment';

export  const  getTimeWithOffset = offset =>{
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: props.city,
            offset: props.offset,
            date: getTimeWithOffset(this.props.offset),
        };
    };

    componentDidMount() {
        this.interaval = setInterval(() => {
            this.setState({
                date: getTimeWithOffset(this.props.offset)
            });
        }, 1000);
    };

    componentWillUnmount(){
        clearInterval(this.interaval)
    };

    render() {
        return (
            <div className="clock">
                <div className="clock__location">{this.props.location}</div>
                <div className="clock__time">{this.state.date.toLocaleTimeString()}</div>
            </div>
        );
    };
};

export default Clock;