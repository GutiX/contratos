var config = require("../../config");

/**
 * This function check the authorization token in the header of the HTTP request. If is correct continue to the REST service.
 */
exports.appValidation = function(req, res, next) {
    var appToken = req.get("authorization");
    var barerTokenParts = [];
    try {
        if (req.headers.authorization)
            barerTokenParts = req.headers.authorization.split(" ");
        if (barerTokenParts.length > 1) appToken = barerTokenParts[1];

        if (appToken && appToken === config.APP_TOKEN) next();
        else res.status(403).send({ valid: false, error: "unauthorized-app" });
    } catch (error) {
        console.error(error)
        res.status(403).send({ valid: false, error: "unauthorized-app" });
    }
};