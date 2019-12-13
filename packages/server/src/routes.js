const express = require('express');
const routes = express.Router();

const auth = require('./middleware/auth');
const Register = require('./controllers/Register');
const Login = require('./controllers/Login');

routes.get('/auth', auth, (req, res) => {
	res.send('Authenticated');
});

//Register
routes.post('/register', Register);

// Login
routes.post('/login', Login);

module.exports = routes;
