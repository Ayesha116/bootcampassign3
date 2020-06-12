import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Name from './Name';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>hello <strong><Name name = "Ayesha"></Name></strong>
  <br/>
  <h1 className =  "bgcolor">Bootcamp assignment 3</h1>
  <p>we have learned so far:-</p>
  <ul>
    <li>Surge</li>
    <li>Yarn</li>
    <li>Actions</li>
  </ul>
  <p>total Days = {7+7+3}</p>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
