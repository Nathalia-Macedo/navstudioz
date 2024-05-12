const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db } = require('./connection')
require('dotenv').config();

const jwtKey = process.env.JWT_SECRET;

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
                const token = jwt.sign({id:user.id, email:user.email, profile:user.profile_id}, jwtKey, {expiresIn:'1h'});
                res.status(200).json({
                    mensagem : "Login successfully.",
                    token : token,
                    redirectUrl : "/pagina2",
                    successful : true
                })
            }
            else{
                res.status(401).json({
                    error : "Incorrect email or password.",
                    successful : false
                });
            }
        }
    })   
}

async function ListUsers(req,res){
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = DecodeToken(token);
        const userId = decodedToken.id;

        await CheckPermission(userId, 1);

        const usersResult = await db.query(`SELECT * FROM users`);
        res.status(200).json({
            mensagem: "Lista de usuários",
            usuarios: usersResult,
            successful: true
        });
    } catch (error) {
        console.error("Erro ao listar usuários", error);
        res.status(500).json({
            error: error.message,
            successful: false
        });
    } 
}

async function CheckPermission(profielId, permissionId){
    const perfilResult = await db.query(`SELECT profile_id FROM user WHERE id = ?`, [profielId]);
    if (perfilResult.length === 0) {
        throw new Error("Perfil não encontrado para o usuário");
    }
    const perfilId = perfilResult[0].perfilid;

    const permissionResult = await db.query(`SELECT * FROM profile_permission WHERE profile_id = ? AND permission_id = ?`, [perfilId, permissionId]);
    if (permissionResult.length === 0) {
        throw new Error("Usuário não possui permissão para realizar esta ação");
    }
}

function DecodeToken(token){
    try{
        const decodeToken = jwk.verify(token, jwtKey)
        return decodeToken;
    }catch(error){
        throw new Error("Invalid token or expired")
    }
}


module.exports = { UserRegistration, UserLogin, ListUsers };