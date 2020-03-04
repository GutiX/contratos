var mysql = require("mysql"),
    config = require("../../../config");
    
var mysqlPool = mysql.createPool(config.mysqlServer);

exports.getConnection = (callback) => {
    mysqlPool.getConnection(function(err, connection) {
        if(err) callback(true, {created: false, error: "fail-mysql-connection"});
        else callback(false, {created: false, con: connection});            
    });
};
