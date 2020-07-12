import React,{Component} from 'react';
import moment from 'moment';
import './clock.scss';

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localTime: moment(getTimeWithOffset(props.offset)).format('HH:mm:ss A'),
            location:props.location
        };

        setInterval(() => {
            this.setState({
            localTime: moment(getTimeWithOffset(props.offset)).format('HH:mm:ss A')
            })
        }, 1000);
    }

    render() {
        return (
        <div className="clock">
            <div className="clock__location">
                {this.state.location}
            </div>
            <div className="clock__time">
                {this.state.localTime}
            </div>
        </div>
        );
    }
};

export default Clock;