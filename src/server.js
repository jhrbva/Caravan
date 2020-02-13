const express = require('express'); // grab express module installed
const app = express(); // created an app using express module
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!')); // express is handling a GET request

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
