var ConnectionFactory = require("../../../../db/connection/mysqlConnectionFactory");

function LoginSQLDB() {
    if (false === (this instanceof LoginSQLDB)) {
        return new LoginSQLDB();
    }
};


/**
 * login user
 */
LoginSQLDB.prototype.login = function(data) {
    return new Promise((resolve, reject) => {
        ConnectionFactory.getConnection((err, resp) => {
            if (!err) {
                var con = resp.con;
                var query = "SELECT iduser FROM contratos.users where email = ? and password = ?";

                con.query(query, [data.email, data.password], function(err, result) {
                    con.release();
                    if (err) throw err;
                    console.log('Respuesta Login: ', result);
                    if (result.length > 0) resolve({ valid: true, userId: result[0].iduser });
                    else reject({ statusCode: 401, error: "Login no valido" });
                });
            } else reject(resp)
        });
    });
};

module.exports = LoginSQLDB;