const express = require('express')
const app = express()

var port = process.env.PORT || 5000;

app.get('/', function (req, res) {
  res.send('test')
})

app.listen(port, function () {
  console.log('Example app listening on port 80!')
})