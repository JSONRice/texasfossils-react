import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

console.log('public url: ', process.env.PUBLIC_URL);


ReactDOM.render(<App></App>, document.getElementById('root'));
registerServiceWorker();
