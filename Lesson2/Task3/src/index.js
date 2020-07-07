import React from'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const renderSeconds = time =>{
    const seconds = new Date(time).getSeconds();

    const blackgroundColor = seconds % 2 === 0
        ? '#fff'
        : '#000';
    
    const styles ={
        color: textColor,
        blackgroundColor
    }
};

const element = (
    <div 
        className="seconds"
        style={styles}
        >
        {seconds}
    </div>
);

ReactDOM.render(rootElement,element);

renderSeconds(new Date());

setInterval(()=> renderSeconds(new Date()),1000);