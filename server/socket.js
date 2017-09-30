module.exports = (app) => {
  const
    ioApp = require('http').Server(app),
    io = require('socket.io')(ioApp),
    uuid = require('uuid/v4'),
    users = [],

    sendMessage = (socket, message, senderId, recipientId, id) => {
      console.log('emit');
      socket.emit('server:event', JSON.stringify({ message, senderId, id }));
    },

    initConnection = (socket) => {
      const userId = users.length + 1;
      users.push({ id: userId });
      socket.emit('server:userId', userId);
    };


  ioApp.listen(5000);

  io.on('connection', socket => {
    initConnection(socket);

    setInterval(() => {
      sendMessage(socket, 'my message', '1', '2', uuid());
    }, 3000);

    socket.on('client:sendMessage', data => {
      console.log(data);
    });
  });
};
