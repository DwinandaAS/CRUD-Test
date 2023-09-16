const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5433,
    password: "thehunter1",
    database: "clarity"
})

module.exports = client