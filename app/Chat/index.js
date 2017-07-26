import React from 'react';
import io from 'socket.io-client'
import Messages from './Messages'
import UserName from './UserName'
import {connect} from 'react-redux';

let
  socket = io.connect('http://localhost:5000')

class Chat extends React.Component {
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
            <UserName />
            <div>
                <Messages/>
            </div>
            <input />
            <button onClick={this.sendMessage('some message')}>Send message</button>
        </div>
    )
  }
}

export default connect()(Chat)
