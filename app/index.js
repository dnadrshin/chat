import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Auth from './Auth';
import Chat from './Chat';
import reducer from './reducer';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const logger = createLogger({});

const
  store = createStore(reducer, applyMiddleware(thunk, logger));

const
  App = () => <Provider store={store}><div><Auth /><Chat /></div></Provider>;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#app'));
