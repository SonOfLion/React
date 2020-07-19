import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const rootElement = document.querySelector('#root');

setTimeout(() => {ReactDOM.render(<App />, rootElement);}, 1000);