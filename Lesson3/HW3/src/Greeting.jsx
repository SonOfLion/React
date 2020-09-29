import React from 'react';
import './greeting.scss';
import moment from 'moment'

function Greeting (props) {
    const age =  moment().diff(moment(props.birthDate), 'years');

    return (
        <div className="greeting">
            My name is {props.firstName} {props.lastName}. I'm {age} years old
        </div>
    );
};

export default Greeting;