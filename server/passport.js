const
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

module.exports = app => {
  // Configure passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  // Configure passport-local to use account model for authentication
  const Account = require('./models/account');
  passport.use(new LocalStrategy(Account.authenticate()));
  passport.serializeUser(Account.serializeUser());
  passport.deserializeUser(Account.deserializeUser());
};
