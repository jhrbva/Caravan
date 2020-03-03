const express = require('express');
const session = require('express-session');
const app = express();
const port = 8080;
const keys = require('./config');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
let user = {};

// Facebook via Passport.js //
passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK.clientID,
    clientSecret: keys.FACEBOOK.clientSecret,
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ facebookId: profile.id }, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

// Google via Passport.js //
passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE.clientID,
    clientSecret: keys.GOOGLE.clientSecret,
    callbackURL: "http://localhost:8080/oauth2callback"
  },
  function(accessToken, refreshToken, profile, done) {
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));


// Start Passport.js //
app.use(session({secret: "crusty"}));
app.use(passport.initialize());
app.use(passport.session());

// Passport will maintain persistent login sessions. In order for persistent sessions to work,
// the authenticated user must be serialized to the session, and deserialized when
// subsequent requests are made.
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

/////////////////
//// Routes ////
///////////////

// Facebook //
app.get('/auth/facebook',
  passport.authenticate('facebook'));
app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));

// Google //
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
app.get('/oauth2callback',
  passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }));

// Logout //
app.get('/logout', function(req, res){
  console.log('logging out');
  req.logout();
  res.redirect('/');
});

// Home //
app.get('/', function (req, res) {
  var html = "<ul>\
    <li><a href='/auth/facebook'>Login with Facebook</a></li>\
    <li><a href='/auth/google'>Login with Google</a></li>\
    <li><a href='/logout'>Logout</a></li>\
  </ul>";
  if (req.isAuthenticated()) {
  html += "<p>authenticated as user:</p>"
  html += "<pre>" + JSON.stringify(req.user, null, 4) + "</pre>";
  }
  res.send(html);
});

app.listen(port, function () {console.log('Running')});
