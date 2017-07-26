import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client'

const
  socket = io.connect('http://localhost:5000');

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
            <h2>React test</h2>
            <button onClick={this.sendMessage('some message')}>
              Click
            </button>
        </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));