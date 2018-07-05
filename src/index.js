import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App';
import registerServiceWorker from './registerServiceWorker';

var person = {
  personName: "Chuck",
  personAge: 30
}

ReactDOM.render(<Hello person={person}/>, document.getElementById('root'));
registerServiceWorker();
