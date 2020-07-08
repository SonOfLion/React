import React from 'react';
import ReactDOM from 'react-dom';
import SearchField from './Search.jsx';
import './index.scss';
import './search.scss';

const rootElem = document.querySelector("#root");

ReactDOM.render(<Search name='Bob' />, rootElem);