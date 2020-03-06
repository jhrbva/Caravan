const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } = require('./secrets');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
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
	done(null, user.userid);
});

passport.deserializeUser((id, cb) => {
	db.query(
		'SELECT userid, username FROM users WHERE userid = $1',
		[parseInt(id, 10)],
		(err, results) => {
			if (err) {
				console.log('Error when selecting user on session deserialize', err);
				return cb(err);
			}

			cb(null, results.rows[0]);
		}
	);
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

app.get('/', (req, res) => {
	return res.send('Hello World!');
}); // express is handling a GET request

app.post('/login', passport.authenticate('local'), (req, res) => {
	const { user } = req;
	res.json(user);
});

app.listen(port, () => console.log(`Example app running on port ${port}!`));
