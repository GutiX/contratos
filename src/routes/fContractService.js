const express = require('express');
const Validator = require('../interceptors/tokenAppValidator');
const ExampleController = require('../components/example/controller/example.controller');

let router = express.Router();

router.get('/', ExampleController.test);
router.get('/list/user/:userId/creator/:isCreator/name/:userName', Validator.appValidation, ExampleController.start);

module.exports = router;