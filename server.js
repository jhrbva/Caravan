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
// continue here: instead of GET we need POST request
// app.get('/login', (req, res) => {
//     req = req.user , req.password
//     pool.query('SELECT * FROM userTable WHERE username='req.user' AND password='req.password';', (err, response) => {
//         console.log(err, response.rows);
//         pool.end();
//     });
// })

app.get('/', (req, res) => {
	console.log(req.body);
	return res.send('Hello World!');
}); // express is handling a GET request

app.listen(port, () => console.log(`Example app running on port ${port}!`));
