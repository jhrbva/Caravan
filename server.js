const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const express = require('express'); // grab express module installed
const app = express(); // created an app using express module
const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } = require('./secrets');

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
					bcrypt.compare(password, first.password, function (err, res) {
						if (err) {
							console.log(err);
							cb(null, false);
						}
						if (res) {
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

app.post('/emergency', (req, res) => {
	const { address, firstname, lastname, phonenumber, relationship } = req.body;
	pool.query(
		'INSERT INTO emergencyContact(address, firstName, lastName, phoneNumber, relationship) VALUES ($1, $2, $3, $4, $5) RETURNING ecid',
		[address, firstname, lastname, phonenumber, relationship],
		(err, results) => {
			if (err) {
				console.log('Error when inserting emergency contact for user', err);
				// TODO: add better error handling
				res.sendStatus(400);
			}
			res.json(results.rows[0].ecid);
		}
	);
});

app.put('/emergency/:userid/:ecid', (req, res) => {
	pool.query(
		'UPDATE usertable SET ecid=$2 WHERE userid=$1',
		[req.params.userid, req.params.ecid],
		(err, results) => {
			if (err) {
				console.log('Error when inserting emergency contact for user', err);
				// TODO: add better error handling
				res.sendStatus(400);
			}
			res.sendStatus(201);
		}
	);
});

app.get('/emergency/:ECid', (req, res) => {
	pool.query(
		'SELECT * FROM emergencyContact WHERE ECid=$1',
		[req.params.ECid],
		(err, result) => {
			if (err) {
				console.log(
					'Error when finding an emergency contact for a specific user',
					err
				);
			}
			if (result.rows.length > 0) {
				res.send(result.rows);
			}
		}
	);
});

app.put('/invitations/:userid/:tripid/:accepted', (req, res) => {
	pool.query(
		'UPDATE invitations SET accepted=$1 WHERE userid=$2 AND tripid=$3',
		[req.params.accepted, req.params.userid, req.params.tripid],
		(err, results) => {
			if (err) {
				console.log('Error when inserting emergency contact for user', err);
				// TODO: add better error handling
				res.sendStatus(400);
			}
			res.sendStatus(201);
		}
	);
});

async function getInvitations(userid) {
	const invitations = (
		await pool.query(
			'SELECT usertable.username as hostname, trips.hostid, invitations.tripid, accepted, trip_title, trip_description, startlocation, start_long, start_lat, destination, dest_long, dest_lat, tripdate FROM invitations INNER JOIN trips ON trips.tripid = invitations.tripid INNER JOIN usertable ON trips.hostid = usertable.userid WHERE invitations.userid=$1 AND accepted IS NULL',
			[userid]
		)
	).rows;
	const TripMembers = await Promise.all(
		invitations.map((trips) => addMembers(trips))
	);
	const InvitationInfo = await Promise.all(
		TripMembers.map((trips) => addRestStops(trips))
	);

	async function addMembers(trips) {
		const res = await pool.query(
			'SELECT usertable.username, members.userid FROM members JOIN usertable on (members.userid = usertable.userid) WHERE tripid=$1',
			[trips.tripid]
		);
		return { ...trips, members: res.rows };
	}

	async function addRestStops(trips) {
		const res = await pool.query('SELECT * FROM reststop WHERE tripid=$1', [
			trips.tripid,
		]);
		return { ...trips, reststops: res.rows };
	}
	return InvitationInfo;
}

app.get('/invitations/:userid', (req, res) => {
	getInvitations(req.params.userid).then((invites) => res.send(invites));
});

app.delete('/invitations/:userid/:tripid', (req, res) => {
	pool.query(
		'DELETE FROM invitations WHERE userid=$1 AND tripid=$2',
		[req.params.userid, req.params.tripid],
		(err, result) => {
			if (err) {
				console.log('Error when deleting invitation for specific user', err);
			}
			if (result.rowCount > 0) {
				res.sendStatus(200);
			}
			if (result.rowCount == 0) {
				// No row that meets the condition
				res.sendStatus(403);
			}
		}
	);
});

app.get('/user/:username', (req, res) => {
	pool.query(
		'SELECT userid FROM usertable WHERE username=$1',
		[req.params.username],
		(err, result) => {
			if (err) {
				console.log('Error when looking for user', err);
			}
			if (result.rows.length > 0) {
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

app.post('/reststop', (req, res) => {
	const { trip_id, location, loc_long, loc_lat } = req.body;
	pool.query(
		'INSERT INTO reststop(tripid, location, loc_long, loc_lat) VALUES ($1, $2, $3, $4)',
		[trip_id, location, loc_long, loc_lat],
		(err, results) => {
			if (err) {
				console.log('Error when inserting rest stop for a trip', err);
				// TODO: add better error handling
				res.sendStatus(400);
			}
			res.sendStatus(201);
		}
	);
});

app.get('/members/:tripid', (req, res) => {
	let result = [];
	pool.query(
		'SELECT userid, firstname, lastname, username, email, phonenumber FROM members NATURAL JOIN usertable WHERE tripid=$1',
		[req.params.tripid],
		(err, results) => {
			if (err) {
				console.log('Error when selecting members of a specific trip', err);
			}
			result.push(results.rows);

			pool.query(
				'SELECT userid, firstname, lastname, username, email, phonenumber FROM usertable WHERE userid = (SELECT hostid FROM trips WHERE tripid=' +
					req.params.tripid +
					')',
				(err, results) => {
					if (err) {
						console.log('Error when selecting host id', err);
					}
					res.send({ host: results.rows, members: result });
				}
			);
		}
	);
});

app.post('/invitations/accept', (req, res) => {
	const { userid, tripid, accepted } = req.body;
	pool.query(
		'UPDATE invitations SET accepted=$1 WHERE userid=$2 AND tripid=$3;',
		[accepted, userid, tripid],
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

app.post('/itineraryrequest', (req, res) => {
	const { tripid, typeid, value, accept } = req.body;
	pool.query(
		'INSERT INTO itineraryrequest(tripid, typeid, value, accept) VALUES ($1, $2, $3, $4)',
		[tripid, typeid, value, accept],
		(err, results) => {
			if (err) {
				console.log('Error when inserting itineraryrequest', err);
				// TODO: add better error handling
				res.sendStatus(400);
			}
			res.sendStatus(201);
		}
	);
});

// I think we don't need this endpoint anymore because of app.delete('/members/:tripid/:userid')
// app.delete('/members', (req, res) => {
// 	const { userid, tripid } = req.body;
// 	console.log(userid, tripid);
// 	pool.query(
// 		'DELETE FROM members WHERE userid=$1 AND tripid=$2',
// 		[userid, tripid],
// 		(err, result) => {
// 			if (err) {
// 				console.log('Error when selecting invitation of a specific user', err);
// 			}
// 			if (result.rowCount > 0) {
// 				res.sendStatus(200);
// 			}
// 			if (result.rowCount == 0) {
// 				// No row that meets the condition
// 				res.sendStatus(403);
// 			}
// 		}
// 	);
// });

app.post('/trip', (req, res) => {
	const {
		host_id,
		start_location,
		start_long,
		start_lat,
		destination,
		dest_long,
		dest_lat,
		trip_date,
		trip_description,
		trip_title,
	} = req.body;
	pool.query(
		'INSERT INTO trips(hostid, startLocation, start_long, start_lat, destination, dest_long, dest_lat, tripDate, trip_description, trip_title) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
		[
			host_id,
			start_location,
			start_long,
			start_lat,
			destination,
			dest_long,
			dest_lat,
			trip_date,
			trip_description,
			trip_title,
		],
		(err, results) => {
			if (err) {
				console.log('Error when inserting new trip', err);
				// TODO: add better error handling
				res.sendStatus(400);
			}
			res.json(results.rows[0].tripid);
		}
	);
});

app.get('/trip/:tripid', (req, res) => {
	pool.query(
		'SELECT trip_title, trip_description, startlocation, start_long, start_lat, destination, dest_long, dest_lat, tripdate FROM trips WHERE tripid=$1',
		[req.params.tripid],
		(err, result) => {
			if (err) {
				console.log(
					'Error when selecting trip information of a specific trip',
					err
				);
			}
			if (result.rows.length > 0) {
				res.json(result.rows[0]);
			}
		}
	);
});

async function getTrips(userid) {
	const tripsHosted = (
		await pool.query(
			'SELECT usertable.username as hostname, hostid, tripid, trip_title, trip_description, startlocation, start_long, start_lat, destination, dest_long, dest_lat, tripdate FROM trips JOIN usertable on (usertable.userid = trips.hostid) WHERE hostid=$1',
			[userid]
		)
	).rows;
	const HostedMerged = await Promise.all(
		tripsHosted.map((trips) => addMembers(trips))
	);
	const HostedInfos = await Promise.all(
		HostedMerged.map((trips) => addRestStops(trips))
	);

	async function addMembers(trips) {
		const res = await pool.query(
			'SELECT usertable.username, members.userid FROM members JOIN usertable on (members.userid = usertable.userid) WHERE tripid=$1',
			[trips.tripid]
		);
		return { ...trips, members: res.rows };
	}

	async function addRestStops(trips) {
		const res = await pool.query('SELECT * FROM reststop WHERE tripid=$1', [
			trips.tripid,
		]);
		return { ...trips, reststops: res.rows };
	}

	const tripsJoined = (
		await pool.query(
			'SELECT t4.accepted, t1.userid as memberid, t1.tripid, t3.username as hostname, t2.hostid, t2.tripid, t2.trip_title, t2.trip_description, t2.startlocation, t2.start_long, t2.start_lat, t2.destination, t2.dest_long, t2.dest_lat, t2.tripdate FROM members t1 join trips t2 on t1.tripid=t2.tripid join usertable t3 on t2.hostid=t3.userid left join invitations t4 on t1.userid = t4.userid AND t4.accepted = true where t1.userid=$1',
			[userid]
		)
	).rows;
	const JoinedMerged = await Promise.all(
		tripsJoined.map((trips) => addMembers(trips))
	);
	const JoinedInfos = await Promise.all(
		JoinedMerged.map((trips) => addRestStops(trips))
	);

	return { tripsHosted: HostedInfos, tripsJoined: JoinedInfos };
}

app.get('/trips/:userid', (req, res) => {
	getTrips(req.params.userid).then((trips) => res.send(trips));
});

app.delete('/reststop', (req, res) => {
	const { reststopid } = req.body;
	pool.query(
		'DELETE FROM reststop WHERE tripid=$1',
		[reststopid],
		(err, result) => {
			if (err) {
				console.log('Error when selecting rest stop', err);
			}
			if (result.rowCount > 0) {
				res.sendStatus(200);
			}
			if (result.rowCount == 0) {
				// No row that meets the condition
				res.sendStatus(403);
			}
		}
	);
});

app.get('/reststop/:tripid', (req, res) => {
	pool.query(
		'SELECT * FROM reststop WHERE tripid=$1',
		[req.params.tripid],
		(err, result) => {
			if (err) {
				console.log('Error when selecting a rest stop', err);
			}
			if (result.rows.length > 0) {
				res.send(result.rows);
			}
		}
	);
});

app.delete('/members/:tripid/:userid', (req, res) => {
	pool.query(
		'DELETE FROM members WHERE userid=$1 AND tripid=$2',
		[req.params.userid, req.params.tripid],
		(err, result) => {
			if (err) {
				console.log('Error when removing a member from a trip', err);
			}
			if (result.rowCount > 0) {
				res.sendStatus(200);
			}
			if (result.rowCount == 0) {
				console.log('User not in members table yet');
				res.sendStatus(403);
			}
		}
	);
});

app.post('/members/:tripid', (req, res) => {
	const { tripid, userid } = req.body;
	pool.query(
		'INSERT INTO members(tripid, userid) VALUES ($1, $2)',
		[tripid, userid],
		(err) => {
			if (err) {
				console.log('Error when adding member to members table', err);
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
	bcrypt.genSalt(10, function (err, salt) {
		if (err) console.log(err);
		bcrypt.hash(password, salt, function (err, hashpassword) {
			if (err) console.log(err);
			pool.query(
				'INSERT INTO userTable(firstName, lastName, username, email, phoneNumber, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
				[firstname, lastname, username, email, phonenumber, hashpassword],
				(err, results) => {
					if (err) {
						console.log('Error when inserting user', err);
						// TODO: add better error handling
						res.sendStatus(400);
					}
					req.login(req.body, (err) => {
						const { user } = req;
						if (err) {
							console.log(err);
						}
						res.json(results.rows[0]);
					});
				}
			);
		});
	});
});

app.listen(port, () => console.log(`Example app running on port ${port}!`));
