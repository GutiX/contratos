/** @module Paths_Controllers_AlertPriority */
const ExampleHandler = require('../handlers/example.handler');
const ERROR_FUNCTION_MAP = require('../functionsMap/error.functionMap');

exports.test = (req, res) => {
    res.status(200).send('Contratos v0.1.');
};

/**
 * Generar una respuesta para los parámetros generados por el NLP para una frase.
 * @param {*} req 
 * @param {*} res 
 */
exports.start = (req, res) => {
    let data = req.body;
    console.log('params UserId: ', req.params.userId);
    console.log('params isCreator: ', req.params.isCreator);
    console.log('params userName: ', req.params.userName);
    console.log('Data: ', JSON.stringify(data));

    ExampleHandler.getExampleInfo(data)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(err => {
            res.status(err.statusCode).send(err.error);
        });
};