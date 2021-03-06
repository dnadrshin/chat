const
  passport = require('passport'),
  Account = require('../models/account'),
  router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', { user: req.user });
});

router.get('/admin', (req, res) => {
  res.render('index', { user: req.user });
});

router.get('/restricted', (req, res) => {
  res.render('restricted', {});
});

router.get('/register', (req, res) => {
  res.render('register', {});
});

router.post('/register', (req, res, next) => {
  Account.register(
    new Account({ username: req.body.username, created_at: new Date() }),
    req.body.password,

    err => {
      if (err) {
        console.log('error while user register!', err);
        return next(err);
      }
      console.log('user registered!');
      res.redirect('/');
    });
});

router.get('/login', (req, res) => {
  res.render('login', { user: req.user });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.redirect('/');
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
