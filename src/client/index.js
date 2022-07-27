// import print from "../func";
// print(3);
import './styles/main.scss';
// import dietetics from './asset/dietetics.jpg';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import APP from './App.jsx';
import store from './store';

render(
  // wrap the App in the Provider Component and pass in the store
  <Provider store={store}>
    <APP />
  </Provider>,
  // document.getElementById() //?????? function
)



// document.getElementById('dietetics').src = dietetics;

