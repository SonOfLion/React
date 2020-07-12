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
            localTime: moment(getTimeWithOffset(props.offset)).format('YYYY-MM-DD HH:mm')
        };

        setInterval(() => {
            this.setState({
            localTime: moment(getTimeWithOffset(props.offset)).format('YYYY-MM-DD HH:mm')
            })
        }, 1000);
    }

    render() {
        return (
        <div className="clock">
            <div className="clock__city">
                {this.state.localTime}
            </div>
            <div className="clock__localtime">
                {this.state.localTime}
            </div>
        </div>
        );
    }
};

export default Clock;