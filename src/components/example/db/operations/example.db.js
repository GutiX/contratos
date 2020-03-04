const { Example, getModel } = require('../models/example.model');
const mongoose = require("mongoose");
const Config = require('../../../../../config');
const errorMsgs = require('../../../../../env/errorMsgs');

/** @constructor */
function ExampleDB() {
    if (false === (this instanceof ExampleDB)) {
        return new ExampleDB();
    }
};


/**
 * 
 * @param {string} nlpInfo - NLP uterance info.
 * @summary Get Templates to build a response.
 * @returns {Promise} Template data or error with statuscode 400
 */
ExampleDB.prototype.getTemplateDocs = function(nlpInfo, isForm = false) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (nlpInfo.topScoringIntent.intent) filter['options.intents'] = nlpInfo.topScoringIntent.intent;

        let entities = Object.keys(nlpInfo.entities);
        let projectionEntityFilter = [];
        if (entities.length > 0) {
            let values = [];
            entities.forEach(entity => {
                values.push(nlpInfo.entities[entity].canonical);
            });

            if (isForm) {
                if (nlpInfo.type) filter.type = nlpInfo.type;
                filter['options.candidates.entities.values'] = { $in: values };
            } else filter['options.candidates.entities.values'] = { $all: values };

            filter['options.candidates.entities.name'] = { $all: entities };
        }

        console.log("Filtro: " + JSON.stringify(filter));

        Template.find(filter)
            .exec(function(err, result) {
                console.log("ExampleDB - find result: " /*, JSON.stringify(result)*/ );
                console.log("ExampleDB - find error: ", err);
                if (!err) {
                    if (result != null) {
                        resolve(result);
                    } else { reject({ statusCode: 400, error: errorMsgs.database.noExistResponse }); }
                } else reject({ statusCode: 400, error: errorMsgs.database.noExistResponse });
            });
    });
};

ExampleDB.prototype.getNoResponseText = () => {
    return new Promise((resolve, reject) => {
        filter = { 'options.intents': 'None' }
        Template.findOne(filter)
            .exec(function(err, result) {
                console.log("ExampleDB - result: ", result);
                //console.log("ExampleDB - error: ", err);
                if (!err) {
                    if (result != null) {
                        resolve(result.text);
                    } else { reject({ statusCode: 400, error: errorMsgs.database.noExistResponse }); }
                } else reject({ statusCode: 400, error: errorMsgs.database.noExistResponse });
            });
    });
};

/**
 * Create test template to create collection
 */
ExampleDB.prototype.create = function() {
    return new Promise((resolve, reject) => {
        var template = Template({
            text: 'Texto de prueba',
            textTemplate: '<%pattern1%>',
            options: []
        });

        template.save(function(err, resp) {
            if (err) {
                //console.log("no saved error: " + err);
                reject({ created: false, error: err });
            } else {
                resolve({ created: true, templateId: resp._id });
            }
        });
    });
};

module.exports = ExampleDB;