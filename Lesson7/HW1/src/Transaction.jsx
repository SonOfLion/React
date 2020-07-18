import React from 'react';
import moment from 'moment';

//date=>time=>from>>to=>rate='en-GB',amount=='en-GB';

const Transaction = ({from, to, amount, rate, time}) => {
    return (
        <li>
            <span className="transaction__date">{moment(time).format('DD MMM   ')}</span>
            <span className="transaction__time">{moment(time).format('   HH:MM')}</span>
            <span className="transaction__assets">{`   ${from}  ->    ${to}`}</span>
            <span className="transaction__rate">{new Intl.NumberFormat('en-GB').format(rate)}</span>
            <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
            <hr></hr>
        </li>
    );
};

export default Transaction;