const mysql = require('promise-mysql');
const {config} = require('../config');

const getConnection = () => {
    return mysql.createConnection({
        host: config.host,
        database: config.database,
        user: config.user,
        password: config.password
    });
}

module.exports = {
    getConnection
}