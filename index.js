const
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  socketHelper = require('./server/socket'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  session = require('cookie-session'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  bodyParser = require('body-parser'),
  passportLocalMongoose = require('passport-local-mongoose'),
  port = process.env.PORT || 8080,
  mongodbUrl = 'mongodb://localhost/passport_local_mongoose_examples';

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');

//socketHelper(app);

//app.use(express.static('public'));

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({keys: ['secretkey1', 'secretkey2', '...']}));

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Configure passport-local to use account model for authentication
var Account = require('./server/models/account');
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

// Connect mongoose
mongoose.connect(mongodbUrl, err => console.log(err ? 'Could not connect to mongodb!' : 'MongoDB connection established'));

// Register routes
app.use('/', require('./server/routes/'));

app.listen(port, function () {
  console.log(`App listening on port ${port}!`)
})
