import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import Reducers from './redux/reducers/index';


const store = createStore(Reducers,compose(applyMiddleware(thunk)));

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);