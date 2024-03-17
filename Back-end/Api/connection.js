const mysql2 = require("mysql2");

const db = mysql2.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"170106",
    database:"navusermanagement"
});

module.exports = { db }