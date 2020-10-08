import React from 'react';
import './transaction.scss';
import moment from 'moment';

function Transaction ( {from,to,amount,rate,time} ) {
    return(
        <ul className="transactions">
            <li className="transaction">
                <span className="transaction__date">{moment(time).format('dd DD')}</span>
                <span className="transaction__time">{moment(time).format('hh:mm')}</span>
                <span className="transaction__assets">{`${from} → ${to}`}</span>
                <span className="transaction__rate">{new Intl.NumberFormat('en-GB').format(rate)}</span>
                <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
            </li>
            {/* <li className="transaction">
                <span className="transaction__date">10 Jan</span>
                <span className="transaction__time">19:01</span>
                <span className="transaction__assets">EUR  USD</span>
                <span className="transaction__rate">1.1</span>
                <span className="transaction__amount">100</span>
            </li> */}
        </ul>
    );
};

export default Transaction;