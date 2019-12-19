const express = require('express');
const routes = express.Router();

const auth = require('./middleware/auth');
const Register = require('./controllers/Register');
const Login = require('./controllers/Login');
const Profile = require('./controllers/Profile');

// Auth
routes.get('/auth', auth, (req, res) => {
	res.send('Authenticated');
});

//Register
routes.post('/register', Register);

// Login
routes.post('/login', Login);

//Profile
routes.get('/profile/:id', Profile.show);
routes.put('/profile/:ID', Profile.update);

module.exports = routes;
