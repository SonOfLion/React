import React from 'react';
import Greeting from './Greeting';

const App = () => {
    return (
        <Greeting firstName='John'
        lastName='Doe'
        birthDate={new Date('2003-01-01T11:32:19.566Z')}/>
    )
}

export default App;