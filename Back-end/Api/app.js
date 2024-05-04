const express = require("express");
const bcrypt = require("bcrypt");
const body_parser = require("body-parser");
const jsonwebtoken = require("jsonwebtoken");
const cors = require('cors');
const { UserRegistration, UserLogin, ListUsers } = require('./apiRequests')
const { db } = require('./connection')

const app = express();
const port = 3000;

app.use(cors(""));
app.use(body_parser.json())

db.connect(err =>{
    if(err)
        console.error("database connection error ",err);
    else
        console.log("connected in database");
})
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.post("/register", async(req, res) =>{ await UserRegistration(req, res) });
app.post("/login", async(req, res) => { await UserLogin(req,res) });
app.get("/users", async(req,res) => { await ListUsers(req,res) });

