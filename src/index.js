import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import  rootReducer from './reducers'

import './index.css';
import App from './containers/App';
//import * as serviceWorker from './serviceWorker';

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


render(
  <Provider store = {store}>
    <App />
    </Provider>,
    document.getElementById('root')
)
