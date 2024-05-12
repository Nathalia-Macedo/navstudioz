const express = require("express");
const body_parser = require("body-parser");
const cors = require('cors');
const { UserRegistration, UserLogin, ListUsers } = require('./apiRequests')
const { db } = require('./connection')
require('dotenv').config();

const app = express();
const port = process.env.PORT;

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

app.post("/api/homescreen/register", async(req, res) =>{ await UserRegistration(req, res) });
app.post("/api/homescreen/login", async(req, res) => { await UserLogin(req,res) });
app.get("/api/mainmenu/listusers", async(req,res) => { await ListUsers(req,res) });
//app.post("/api/homescreen/recoverpassword", async(req, res) => { await UserLogin(req,res) });