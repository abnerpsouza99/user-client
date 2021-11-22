import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <AppRouter/>,
  document.getElementById('root')
);