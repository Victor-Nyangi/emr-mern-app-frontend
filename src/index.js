import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';

import { store } from './redux/store';
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import rootReducer from './redux/reducers';
import reportWebVitals from './reportWebVitals';

// import { store } from './redux/store'
// const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
         </Router>
  </React.StrictMode>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
