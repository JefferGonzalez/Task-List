const {config} = require('dotenv');

config()

module.exports = {
    config: {
        host: process.env.DB_HOST || '',
        database: process.env.DB_DATABASE || '',
        user: process.env.DB_USERNAME || '',
        password: process.env.DB_PASSWORD || ''
    }
}