const mysql2 = require("mysql2");

const db = mysql2.createConnection({
    host:"",
    user:"",
    password:"",
    database:"navusermanagement"
});

module.exports = { db }