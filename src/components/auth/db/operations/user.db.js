var ConnectionFactory = require("../../../../db/connection/mysqlConnectionFactory");

function LoginSQLDB() {
    if (false === (this instanceof LoginSQLDB)) {
        return new LoginSQLDB();
    }
};


/**
 * login user
 */
LoginSQLDB.prototype.register = function(data) {
    return new Promise((resolve, reject) => {
        ConnectionFactory.getConnection((err, resp) => {
            if (!err) {
                var con = resp.con;
                var query = "INSERT INTO `contratos`.`users` (`email`, `name`, `password`, `surname`, `dni`) VALUES (?, ?, ?, ?, ?)";

                con.query(query, [data.email, data.name, data.password, data.surname, data.dni], function(err, result) {
                    con.release();
                    if (err) reject({ statusCode: 500, error: err });
                    console.log('Respuesta Register: ', result);
                    resolve({ registered: true });
                });
            } else reject(resp)
        });
    });
};

module.exports = LoginSQLDB;