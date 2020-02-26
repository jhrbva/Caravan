const express = require('express'); // grab express module installed
const app = express(); // created an app using express module
const { Pool } = require('pg');
const port = 8080;

const pool = new Pool({
	user: 'postgres',
	host: 'database-4.ckeaom6xxsow.us-east-2.rds.amazonaws.com',
	database: 'Pepperoni',
	password: 'tazoicedblacktea',
	port: 5432,
});

pool.query('SELECT * FROM userTable LIMIT 1;', (err, res) => {
	console.log(err, res);
	pool.end();
});

app.get('/', (req, res) => res.send('Hello World!')); // express is handling a GET request

app.listen(port, () => console.log(`Example app running on port ${port}!`));
