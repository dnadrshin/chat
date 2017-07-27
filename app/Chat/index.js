import React from 'react';
import Messages from './Messages';
import UserName from './UserName';
import {connect} from 'react-redux';
import socketHelper from './socket'

class Chat extends React.Component {
  state = { data: {} }

  componentDidMount() {
      this.props.createSocket()
  }

  sendMessage(message) {;
    this.props.sendMessage(message);
  }

  render () {
    return (
        <div>
            <h2>Chat</h2>
            <UserName />
            <Messages />
            <input />
            <button onClick={this.sendMessage('some message')}>Send message</button>
        </div>
    )
  }
}

export default connect(
    null,

    dispatch => ({
        createSocket: () => dispatch(socketHelper.createSocket()),
        sendMessage: message => dispatch(socketHelper.sendMessage(message))
    })
)(Chat)
