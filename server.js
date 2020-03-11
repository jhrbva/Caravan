const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const {
	DB_USER,
	DB_HOST,
	DB_NAME,
	DB_PASSWORD,
	FACEBOOK,
	GOOGLE,
} = require('./secrets');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const express = require('express'); // grab express module installed
const session = require('express-session');
const app = express(); // created an app using express module

const port = 8080;
let user = {};

const pool = new Pool({
	user: DB_USER,
	host: DB_HOST,
	database: DB_NAME,
	password: DB_PASSWORD,
	port: 5432,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'crusty' }));
app.use(passport.initialize());
app.use(passport.session());

// Facebook via Passport.js //
passport.use(
	new FacebookStrategy(
		{
			clientID: FACEBOOK.clientID,
			clientSecret: FACEBOOK.clientSecret,
			callbackURL: 'http://localhost:8080/auth/facebook/callback',
		},
		function(accessToken, refreshToken, profile, done) {
			User.findOrCreate({ facebookId: profile.id }, function(err, user) {
				if (err) {
					return done(err);
				}
				done(null, user);
			});
		}
	)
);

// Google via Passport.js //
passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE.clientID,
			clientSecret: GOOGLE.clientSecret,
			callbackURL: 'http://localhost:8080/oauth2callback',
		},
		function(accessToken, refreshToken, profile, done) {
			User.findOrCreate({ googleId: profile.id }, function(err, user) {
				return done(err, user);
			});
		}
	)
);

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use(
	new LocalStrategy((username, password, cb) => {
		pool.query(
			'SELECT * FROM usertable WHERE username=$1',
			[username],
			(err, result) => {
				if (err) {
					console.log('Error when selecting user on login', err);
					return cb(err);
				}

				if (result.rows.length > 0) {
					const first = result.rows[0];
					cb(null, first);
				} else {
					cb(null, false);
				}
			}
		);
	})
);

// Passport will maintain persistent login sessions. In order for persistent sessions to work,
// the authenticated user must be serialized to the session, and deserialized when
// subsequent requests are made.

/////////////////
//// Routes ////
///////////////

app.get('/', function(req, res) {
	var html =
		"<ul>\
	  <li><a href='/auth/facebook'>Login with Facebook</a></li>\
	  <li><a href='/auth/google'>Login with Google</a></li>\
	  <li><a href='/logout'>Logout</a></li>\
	</ul>";
	if (req.isAuthenticated()) {
		html += '<p>authenticated as user:</p>';
		html += '<pre>' + JSON.stringify(req.user, null, 4) + '</pre>';
	}
	res.send(html);
});

// app.get('/', (req, res) => {
// 	return res.send('Hello World!');
// });

app.post('/login', passport.authenticate('local'), (req, res) => {
	const { user } = req;
	res.json(user);
});

app.get('/logout', function(req, res) {
	console.log('logging out');
	req.logout();
	res.redirect('/');
});

// Facebook //
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get(
	'/auth/facebook/callback',
	passport.authenticate('facebook', {
		successRedirect: '/',
		failureRedirect: '/login',
	})
);

// Google //
app.get(
	'/auth/google',
	passport.authenticate('google', {
		scope: ['https://www.googleapis.com/auth/plus.login'],
	})
);
app.get(
	'/oauth2callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login',
	})
);

app.listen(port, () => console.log(`Example app running on port ${port}!`));
