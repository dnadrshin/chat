const
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  initApp = require('./server/app'),
  initSocket = require('./server/socket'),
  initPassport = require('./server/passport'),
  settings = require('./server/settings');

initApp(app);
initPassport(app);
//initSocket(app);

// Connect mongoose
mongoose.connect(settings.mongodbUrl, err => console.log(err ? 'Could not connect to mongodb!' : 'MongoDB connection established'));

// Register routes
app.use('/', require('./server/routes/'));

app.listen(settings.port, function () {
  console.log(`App listening on port ${settings.port}!`)
})
