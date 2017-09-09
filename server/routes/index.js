const
    passport = require('passport'),
    Account = require('../models/account'),
    router = require('express').Router();

router.get('/', function(req, res) {
    res.render('index', {user: req.user});
});

router.get('/admin', function(req, res) {
    res.render('index', {user: req.user});
});

router.get('/register', function(req, res) {
    res.render('register', {});
});

router.get('/restricted', function(req, res) {
    res.render('restricted', {});
});


router.post('/register', function(req, res, next) {
    Account.register(new Account({username: req.body.username, created_at: new Date()}), req.body.password, function(err) {
        if (err) {
        console.log('error while user register!', err);
        return next(err);
    }

    console.log('user registered!');

    res.redirect('/');
  });
});

router.get('/login', function(req, res) {
    res.render('login', {user: req.user});
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
