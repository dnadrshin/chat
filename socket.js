module.exports = (app) => {
  const
    ioApp = require('http').Server(app),
    io = require('socket.io')(ioApp);

  ioApp.listen(5000);

  let users = [];

  io.on('connection', function (socket) {
    let userId = users.length+1;
    users.push({id: userId})
    socket.emit('server:userId', userId);

    setInterval(()=>{
      console.log('emit')
      socket.emit('server:event', { hello: 'world' });
    }, 1000)

    socket.on('client:sendMessage', function (data) {
      console.log(data);
    });
  });
}
