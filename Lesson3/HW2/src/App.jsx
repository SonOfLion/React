import React from 'react'
import Profile from './profile';

const userData = {
    firstName:'John',
    lastName:'Doe',
    birthDate:'1991-01-17T11:11:11.819Z',
    birthPlace:'London'
};

const App = () => {
    return (<Profile user={userData}/>);
};

export default App;