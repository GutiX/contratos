module.exports = {
    "defaultServer": {
        "host": "localhost",
        "port": 3000,
        "httpType": "http://",
        "hostname": ""
    },
    "mongodbServer": {
        "host": "desanodejs",
        "port": "27017",
        "databaseName": "lng",
        "user": "lng",
        "password": "Tele1234",
        "options": {
            "useMongoClient": true,
            "server": {
                "poolSize": 100
            }
        }
    },
    "TOKEN_SECRET": process.env.TOKEN_SECRET || "Tele1234",
    "APP_TOKEN": "apptoken",
    "defaultLanguage": "es",
    "debug": false
}