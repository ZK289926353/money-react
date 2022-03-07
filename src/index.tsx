import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'index.scss'

ReactDOM.render(
  // React.StrictMode这个标签没有实际用途
  <React.StrictMode>  
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

