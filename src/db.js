const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'skills',
    password: '3131718z',
    port: '5432'
})

module.exports = pool