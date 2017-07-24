import React from 'react';
import ReactDOM from 'react-dom';
import socket from 'socket.io-client'

const
    handleClick = function() {
        console.log('click')
    }

class App extends React.Component {
  state = { data: {} }

  componentDidMount() {    
    socket.on(`server:event`, data => {
      this.setState({ data })
    })
  }

  sendMessage = message => {
    socket.emit(`client:sendMessage`, message)
  }

  render () {
    return (
        <div>
            <h2>React test</h2>
            <button onClick={this.sendMessage}></button>
        </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));