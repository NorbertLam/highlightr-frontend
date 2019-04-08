import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';


require('dotenv').config();

const store = createStore(reducer, 
  compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )

)

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider >
  , document.getElementById('root'));

serviceWorker.unregister();
