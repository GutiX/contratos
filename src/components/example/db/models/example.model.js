var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ExampleSchema = new Schema({
    text: { type: String, default: "" },
    textTemplate: { type: String, default: "" },
    type: { type: String, default: "" },
    options: [{
        intents: [{ type: String, default: "" }],
        candidates: [{
            patterns: [{
                patternId: { type: String, default: "" },
                pattern: { type: String, default: "" }
            }],
            entities: [{
                required: { type: Boolean, default: true },
                name: { type: String },
                values: [{ type: String }]
            }]
        }]
    }]
});

// get model dynamically
let getModel = (collectionName) => {
    console.log('collectionName: ', collectionName);
    return mongoose.model(collectionName, ExampleSchema);
};

module.exports.Example = mongoose.model('example', ExampleSchema);
module.exports.getModel = getModel;