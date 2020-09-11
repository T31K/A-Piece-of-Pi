import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
      <App />
=======
import * as serviceWorker from './serviceWorker';
import MainContent from './App';
import Navigation from './Navigation';

ReactDOM.render(
  <React.StrictMode>
      <Navigation />
      <MainContent />
>>>>>>> 6f3fe7df2b446aec1099ee00360531e1acac5de0

  </React.StrictMode>,
  document.getElementById('root')
);

<<<<<<< HEAD
=======
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> 6f3fe7df2b446aec1099ee00360531e1acac5de0
