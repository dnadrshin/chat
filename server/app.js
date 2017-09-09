
const
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    session = require('cookie-session'),
    cookieParser = require('cookie-parser');

module.exports = app => {
    // view engine setup
    app.set('views', path.join(__dirname, './views'));
    app.set('view engine', 'jade');
    app.set('title', 'Chat')

    //app.use(express.static('public'));

    // uncomment after placing your favicon in /public
    // app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(session({keys: ['secretkey1', 'secretkey2', '...']}));
}