const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { db } = require('./connection')

async function UserRegistration(req, res){
    const { name, surname, email, password, cpf } = req.body;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassWord = await bcrypt.hash(password, salt);

    db.query(`INSERT INTO user (name, surname, email, cpf, password_hash, salt) VALUES (?, ?, ?, ?, ?, ?)`, [name, surname, email, cpf, hashedPassWord, salt], (err,result) => {
        if(err){
            console.error("Error in registration", err);
            res.status(500).json({error:"Internal error"});
        }else{
            res.status(201).json({
                mensagem:"Registration completed successfully",
                successful : true
            })
        }
    });
}

async function UserLogin(req, res){
    const { email, password } = req.body;
    // console.log(email, password)
    db.query(`SELECT * FROM user WHERE email = ?`, [email], async (err,result) => {
        if(err){
            console.error("Error when searching for user", err)
            res.status(500)
        }
        if(result.length === 0){
            res.status(401).json({error : "Incorrect email or password."});
        }else{
            const user = result[0];
            const correctPassword = await bcrypt.compare(password, user.password_hash);
            
            if(correctPassword){
                res.status(200).json({
                    mensagem : "Login successfully.",
                    successful : true
            })
            }else{
                res.status(401).json({error : "Incorrect email or password."});
            }
        }
    })
}

async function ListUsers(req,res){
    db.query(`SELECT id,name,surname,email,cpf FROM user`, (err,result) =>{
        if(err){
            res.status(500).json("Error when searching for users.")
            throw err
        }
        res.status(200).json(result)
    })
}

module.exports = { UserRegistration, UserLogin, ListUsers };