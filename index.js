const
  express = require('express'),
  app = express(),
  socketHelper = require('./socket'),
  port = process.env.PORT || 8080;

socketHelper(app);

app.use(express.static('public'));

app.get('/test', function (req, res) {
  res.send('test')
})

app.listen(port, function () {
  console.log(`App listening on port ${port}!`)
})