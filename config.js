module.exports = {
    "defaultServer": {
        "host": "localhost",
        "port": 3000,
        "httpType": "http://",
        "hostname": ""
    },
    "mysqlServer": {
        "connectionLimit": 100,
        "host": "localhost",
        "port": "3306",
        "databaseName": "contratos",
        "user": "guti",
        "password": "Tele1234",
    },
    "TOKEN_SECRET": process.env.TOKEN_SECRET || "Tele1234",
    "APP_TOKEN": "apptoken",
    "defaultLanguage": "es",
    "debug": false
}