import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShowTasks from './components/ShowTasks';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ShowTasks/>
  </React.StrictMode>,
  document.getElementById('root')
);