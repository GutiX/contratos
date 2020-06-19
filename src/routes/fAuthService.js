const express = require('express');
const LoginController = require('../components/auth/controller/login.controller');
const UserController = require('../components/auth/controller/user.controller');

let router = express.Router();

router.post('/login', LoginController.login);
router.post('/register', UserController.register);

module.exports = router;