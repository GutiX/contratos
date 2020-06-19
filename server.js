var express = require('express'),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    fs = require('fs'),
    mysqlConnection = require("./src/db/connection/mysqlConnectionFactory"),
    mongoose = require("mongoose"),
    config = require('./config');

// *** Definición de los modelos de MongoDB
// var Template = require("./src/components/generator/db/models/TemplateModel");

global.port = process.env.PORT || config.defaultServer.port;
global.hostname = process.env.IP || config.defaultServer.host;
global.hosturl = config.defaultServer.httpType + (config.defaultServer.hostname || config.defaultServer.host + ":" + config.defaultServer.port);
console.log("hostUrl: " + global.hosturl);

/**
 * HTTP SERVER
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTION,PUT,DELETE,PATCH');
    res.header('Allow', 'GET,POST,OPTION,PUT,DELETE,PATCH');
    next();
});

/** HTTP SERVER */

/**
 * PATH URL REST SERVICES
 */
var pathApi = "/api/v1";

app.listen(global.port, function() {
    console.log("Node server running on port " + global.port);
});
/** END PATH URL REST SERVICES */

/**  
 * GENERATOR API 
 */
var fContractService = require('./src/routes/fContractService');
app.use(pathApi + "/contract", fContractService);

var fAuthService = require('./src/routes/fAuthService');
app.use(pathApi + "/auth", fAuthService);

/**  END GENERATOR API */

/** 
 * LOAD MONGO DATABASE 
 */
// mongodbConnection.loadDatabase();
/** END LOAD MONGO DATABASE */