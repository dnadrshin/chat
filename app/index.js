import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  render() {
    return (
      <div>React test</div>
    );
  }
});

ReactDOM.render(<App/>, document.querySelector('#app'));