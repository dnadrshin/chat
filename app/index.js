import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client'

const
    handleClick = function() {
        console.log('click')
    }

    App = () => <div>
        <h2>React test</h2>
        <button click={handleClick()}></button>s
    </div>

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
            <button click={this.sendMessage()}></button>
        </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));