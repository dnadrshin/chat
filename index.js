const
    app = require('./server/app'),
    mongoose = require('mongoose'),
    initSocket = require('./server/socket'),
    initPassport = require('./server/passport'),
    settings = require('./server/settings'),
    middlewares = require('./server/middleware');

initPassport(app);

//initSocket(app);

// Connect mongoose
mongoose.connect(settings.mongodbUrl, err => console.log(err ? 'Could not connect to mongodb!' : 'MongoDB connection established'));
mongoose.set('debug', true);

module.exports = app;
