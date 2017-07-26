import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import io from 'socket.io-client'
import Auth from './Auth'
import Chat from './Chat'
import reducer from './reducer'

let
    store = createStore(reducer);

const
  App = props => <div><Auth /><Chat /></div>;

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#app'));
