import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import Reducers from './redux/reducers/index';


const store = createStore(Reducers,compose(applyMiddleware(thunk)));

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <ChakraProvider>
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  </ChakraProvider>,
  document.getElementById('root')
);