import React from 'react';
import ReactDOM from 'react-dom';

const rootElem = document.querySelector('#root');

const elem = <h1>React {5 + 5} times is better with JSX!)</h1>

ReactDOM.render(rootElem, elem);