const
  express = require('express'),
  app = express(),
  ioApp = require('http').Server(app);
  io = require('socket.io')(ioApp),
  port = process.env.PORT || 5000;

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

app.use(express.static('public'));

app.get('/test', function (req, res) {
  res.send('test')
})

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`)
})