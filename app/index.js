import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import io from 'socket.io-client'
import Messages from './Messages'
import reducer from './reducer'

const
  socket = io.connect('http://localhost:5000');

let
    store = createStore(reducer);

class App extends React.Component {
  state = { data: {} }

  componentDidMount() {    
    socket.on(`server:event`, data => {
      console.log(data)
      this.setState({ data })
    })
  }

  sendMessage(message) {
    return () => {console.log('emit');
    socket.emit(`client:sendMessage`, message)}
  }

  render () {
    return (
        <div>
            <h2>Chat</h2>
            <div>
                <Messages messages={this.props.messages}/>
            </div>
            <button onClick={this.sendMessage('some message')}>
              Click
            </button>
        </div>
    )
  }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#app'));
