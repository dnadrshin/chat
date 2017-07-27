import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import Auth from './Auth'
import Chat from './Chat'
import reducer from './reducer'

const logger = createLogger({
  // ...options
});

let
    store = createStore(reducer, applyMiddleware(thunk, logger));

const
  App = props => <div><Auth /><Chat /></div>;

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#app'));
