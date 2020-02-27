// This is a temporary page.
// The idea for this folder is to group router endpoints into modular files such as
// user.js which will have GET methods to get all users /users or a specific user /user/:id.
// and creating users with a POST /newUser.

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

module.exports = router;
