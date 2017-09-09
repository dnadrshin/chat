const
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

export default = app => {
    // Configure passport middleware
    app.use(passport.initialize());
    app.use(passport.session());

    // Configure passport-local to use account model for authentication
    var Account = require('./server/models/account');
    passport.use(new LocalStrategy(Account.authenticate()));
    passport.serializeUser(Account.serializeUser());
    passport.deserializeUser(Account.deserializeUser());
}
