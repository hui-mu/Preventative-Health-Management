// import print from "../func";
// print(3);
import './styles/main.scss';
// import dietetics from './asset/dietetics.jpg';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

render(
  // wrap the App in the Provider Component and pass in the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('contents') //?????? function
)



// document.getElementById('dietetics').src = dietetics;

