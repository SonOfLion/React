import React from 'react';
import Clock from './Clock'

const App = () => {
    return (
        <>
            <App location={"New-York"} offset={-5}/>
            <App location={"Kyiv"} offset={2}/>
            <App location={"London"} offset={0}/>
        </>
    );
}

export default App;