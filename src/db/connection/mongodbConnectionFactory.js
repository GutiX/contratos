var mongoose = require("mongoose"),
    config = require("../../../config");

/**
 * Create database pool connections.
 */
exports.loadDatabase = function() {  
    var dbhosturi = "mongodb://" + config.mongodbServer.user + ":" + config.mongodbServer.password + "@" + config.mongodbServer.host + ":" + config.mongodbServer.port + "/" + config.mongodbServer.databaseName;
  
    console.log("DB Host: " + dbhosturi);

    //var db = mongoose.createConnection(dbhosturi, config.mongodbServer.options);
    mongoose.connect(dbhosturi);    
    var db = mongoose.connection;
    console.log("DB satate ready: " + db.readyState);
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("MongoDB connected successfully!!");
    });
}

exports.disconnect = function() {  
    mongoose.disconnect();
}