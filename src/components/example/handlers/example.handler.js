/** @module Paths_Handlers_Template */

const ExampleDB = require("../db/operations/example.db");

const defaultLanguage = "es";

/**
 * Get Template data
 * @param {string} data  - data description
 * @summary function description
 * @returns {Promise}
 */
exports.getExampleInfo = (data) => {
    return new Promise((resolve, reject) => {
        // **********************************************
        // Ejemplo de llamar a función de base de datos
        // let exampleDB = new ExampleDB();
        // exampleDB.getTemplateDocs(nlpInfo, isForm)
        //     .then(templateDocs => resolve(templateDocs))
        //     .catch(error => reject(error));
        // **********************************************

        resolve({ response: 'Respuesta de ejemplo.' });
    });
};