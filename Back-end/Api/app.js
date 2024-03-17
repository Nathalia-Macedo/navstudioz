const express = require("express");
const bcrypt = require("bcrypt");
const body_parser = require("body-parser");
const jsonwebtoken = require("jsonwebtoken");
const mysql2 = require("mysql2");
const cors = require('cors');

const body_parser = require("body-parser");
const { UserRegistration, UserLogin, ListUsers } = require('./apiRequests')
const { db } = require('./connection')

const app = express();
const port = 3000;

app.use(cors(""));
app.use(body_parser.json());
const db = mysql2.createConnection({
    host:"",
    user:"",
    password:"",
    database:"navusermanagement"
});

db.connect(err =>{
    if(err)
        console.error("database connection error ",err);
    else
        console.log("connected in database");
})
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

//routes
app.post("/cadastro", async(req, res) => {
    const { name, surname, email, password, cpf } = req.body;
    console.log(name, surname, email, password, cpf)
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassWord = await bcrypt.hash(password, salt);

    db.query(`INSERT INTO user (name, surname, email, cpf, password_hash, salt) VALUES (?, ?, ?, ?, ?, ?)`, [name, surname, email, cpf, hashedPassWord, salt], (err,result) => {
        if(err){
            console.error("Error in registration", err);
            res.status(500).json({error:"Internal error"});
        }else{
            res.status(201).json({mensagem:"Registration completed successfully"})
        }
    });
});
app.post("/register", async(req, res) =>{ await UserRegistration(req, res) });
app.post("/login", async(req, res) => { await UserLogin(req,res) });
app.get("/users", async(req,res) => { await ListUsers(req,res) });
