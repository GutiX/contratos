class Document {

    constructor(doc) {
        this.document = {
            text: doc.text || '',
            textTemplate: doc.textTemplate,
            option: {
                intent: doc.options[0].intent,
                candidate: doc.options[0].candidates[0]
            }
        };

    }

    getDocument() {
        return this.document;
    }

}

module.exports = Document;