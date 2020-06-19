/** @module Paths_Controllers_AlertPriority */
const LoginHandler = require('../handlers/login.handler');
const ERROR_FUNCTION_MAP = require('../functionsMap/error.functionMap');
const UserDB = require('../db/operations/user.db');

exports.test = (req, res) => {
    res.status(200).send('Contratos v0.1.');
};

/**
 * login
 * @param {*} req 
 * @param {*} res 
 */
exports.register = (req, res) => {
    let data = req.body;
    console.log('Data: ', JSON.stringify(data));

    let userDB = new UserDB();

    userDB.register(data)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => {
            res.status(err.statusCode || 500).send(err.error || {});
        });
};