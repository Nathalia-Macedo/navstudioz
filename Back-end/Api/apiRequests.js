const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { db } = require('./connection')

async function UserRegistration(req, res){
    const { name, surname, email, password, telefone } = req.body;
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassWord = await bcrypt.hash(password, salt);
    db.query(`INSERT INTO users (name, surname, email, telephone, password_hash, salt) VALUES (?, ?, ?, ?, ?, ?)`, [name, surname, email, telefone, hashedPassWord, salt], (err,result) => {
        if(err){
            console.error("Error in registration", err);
            res.status(500).json({
                error : "Internal error",
                mensagemErros : err.sqlMessage,
                successful : false
            });
                                  
        }else{
            res.status(201).json({
                mensagem : "Registration completed successfully",
                successful : true
            })
        }
    });
}

async function UserLogin(req, res){
    const { email, password } = req.body;   
    db.query(`SELECT * FROM users WHERE email = ?`, [email], async (err,result) => {
        if(err){
            console.error("Error when searching for user", err)
            res.status(500).json({
                error : "Error when searching for user "+err,
                successful : false
            })
        }
        if(result.length === 0){
            res.status(401).json({
                error : "Incorrect email or password.",
                successful : false
            });
        }else{
            const user = result[0];
            const correctPassword = await bcrypt.compare(password, user.password_hash);
            if(correctPassword){
                res.status(200).json({
                    mensagem : "Login successfully.",
                    redirectUrl : "/pagina2",
                    successful : true
            })
            }else{
                res.status(401).json({
                    error : "Incorrect email or password.",
                    successful : false
                });
            }
        }
    })   
}

async function ListUsers(req,res){
    db.query(`SELECT name,surname,email,telephone FROM users`, (err,result) =>{
        if(err){
            res.status(500).json({
                mensagem : "Error when searching for users.",
                mensagemErros : err.sqlMessage
            })
        }
        res.status(200).json(result)
    })  
}

module.exports = { UserRegistration, UserLogin, ListUsers };