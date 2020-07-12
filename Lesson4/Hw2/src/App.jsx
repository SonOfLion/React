import React from 'react';
import Clock from './Clock'

const App = () => {
    return (
        <>
            <App city={"New-York"} offset={-5}/>
            <App city={"Kyiv"} offset={2}/>
            <App city={"London"} offset={0}/>
        </>
    );
}

export default App;