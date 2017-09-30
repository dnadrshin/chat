import io from 'socket.io-client';

const
  socket = io.connect('http://localhost:5000');

export default {
  createSocket: () => dispatch => {
    dispatch({ type: 'CREATE_WS_CONNECTION' });
    socket.on('server:event', data => {
      dispatch({ type: 'RECIEVE_MESSAGE', payload: JSON.parse(data) });
    });
  },

  sendMessage: message => () => {
    socket.emit('client:sendMessage', message);
  },
};
