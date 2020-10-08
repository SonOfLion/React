import React from 'react';
import TransactionList from './TransactionsList';

const transactions = [
    {
        id: 'id-1',
        from: 'USD',
        to: 'EUR',
        rate: 0.8,
        time: '2020-10-08T16:39:13+03:00',
        amount: 1.200,
    },
    {
        id: 'id-2',
        from: 'USD',
        to: 'UAH',
        rate: 25.7,
        time: '2020-10-08T16:39:13+03:00',
        amount: 100.000,
    },
    {
        id: 'id-3',
        from: 'EUR',
        to: 'USD',
        rate: 1.1,
        time: '2020-10-08T16:39:13+03:00',
        amount: 100,
    },
]

function App () {
    return (
        <TransactionList transactions={transactions}/>
    );
};

export default App;