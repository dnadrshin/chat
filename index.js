const
  express = require('express'),
  app = express(),
  port = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/test', function (req, res) {
  res.send('test')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})