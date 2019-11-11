import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let nav = {'main': '/index', 'about': '/about', 'price': '/buy/price', 'contacts': '/contacts'};

ReactDOM.render(<App title="My site 1" hero="Go-go-go 2" nav={nav} text55="Hi mahai" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
