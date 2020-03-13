const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } = require('./secrets');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const express = require('express'); // grab express module installed
const app = express(); // created an app using express module

const port = 8080;

const pool = new Pool({
	user: DB_USER,
	host: DB_HOST,
	database: DB_NAME,
	password: DB_PASSWORD,
	port: 5432,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((id, cb) => {
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
					bcrypt.compare(password, first.password, function(err, res) {
						if (err) {
							console.log(err);
							cb(null, false);
						}
						if (res) {
							console.log(res);
							cb(null, first);
						}
					});
				}
			}
		);
	})
);

app.get('/', (req, res) => {
	return res.send('Hello World!');
}); // express is handling a GET request

app.post('/login', passport.authenticate('local'), (req, res) => {
	const { user } = req;
	res.json(user);
});

app.get('/invitations/:userid', (req, res) => {
	pool.query(
		'SELECT * FROM invitations NATURAL JOIN trips NATURAL JOIN usertable WHERE userid=$1',
		[req.params.userid],
		(err, result) => {
			if (err) {
				console.log('Error when selecting invitation of a specific user', err);
			}
			if (result.rows.length > 0) {
				console.log(result.rows[0]);
				res.send(result.rows);
			}
		}
	);
});

app.get('/trip/:userid', (req, res) => {
	pool.query(
		'SELECT * FROM trips INNER JOIN members ON trips.tripid=members.tripid WHERE members.userid=$1',
		[req.params.userid],
		(err, result) => {
			if (err) {
				console.log('Error when selecting trips of a specific user', err);
			}
			if (result.rows.length > 0) {
				console.log(result.rows[0]);
				res.send(result.rows);
			}
		}
	);
});

app.post('/invitations', (req, res) => {
	const { host_id, user_id, trip_id } = req.body;
	pool.query(
		'INSERT INTO invitations(hostid, userid, tripid) VALUES ($1, $2, $3)',
		[host_id, user_id, trip_id],
		(err, results) => {
			if (err) {
				console.log('Error when inserting invitation', err);
				// TODO: add better error handling
				res.sendStatus(400);
			}
			res.sendStatus(201);
		}
	);
});

app.post('/signup', (req, res) => {
	const {
		firstname,
		lastname,
		username,
		email,
		phonenumber,
		password,
	} = req.body;
	bcrypt.genSalt(10, function(err, salt) {
		if (err) console.log(err);
		bcrypt.hash(password, salt, function(err, hashpassword) {
			if (err) console.log(err);
			pool.query(
				'INSERT INTO userTable(firstName, lastName, username, email, phoneNumber, password) VALUES ($1, $2, $3, $4, $5, $6)',
				[firstname, lastname, username, email, phonenumber, hashpassword],
				(err, results) => {
					if (err) {
						console.log('Error when inserting user', err);
						// TODO: add better error handling
						res.send(400);
					}
					req.login(req.body, err => {
						const { user } = req;
						if (err) {
							console.log(err);
						}
						res.json(user);
					});
				}
			);
		});
	});
});

app.listen(port, () => console.log(`Example app running on port ${port}!`));
