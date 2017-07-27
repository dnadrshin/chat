module.exports = (app) => {
  const
    ioApp = require('http').Server(app),
    io = require('socket.io')(ioApp),
    uuid = require('uuid/v4')

  ioApp.listen(5000);

  let 
    users = [],


  initConnection = (socket) => {
    let userId = users.length+1;
    users.push({id: userId})
    socket.emit('server:userId', userId);
  }

  sendMessage = (socket, message, senderId, recipientId, id) => {
      console.log('emit')
      socket.emit('server:event', JSON.stringify({message, senderId, id}));
  }


  io.on('connection', function (socket) {
    initConnection(socket);

    setInterval(()=>{
      sendMessage(socket, 'my message', '1', '2', uuid())
    }, 3000)

    socket.on('client:sendMessage', function (data) {
      console.log(data);
    });
  });
}
