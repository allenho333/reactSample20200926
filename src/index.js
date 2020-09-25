import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './components/app/index.js'
import * as serviceWorker from './serviceWorker';
// import { Button } from 'element-react';
// import 'element-theme-default';
import store from "./store/store.js";
import {Provider } from 'react-redux'
// store.subscribe(()=>{

// })

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App1 />
    </Provider>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
