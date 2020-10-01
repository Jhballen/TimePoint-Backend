require('../database/db.connection');
const userModel = require('../model/user.model');
const jws = require('jsonwebtoken');

const sessionController = {};

sessionController.post = async function(req,res){
    const user = await userModel.findOne({mail:req.body.mail});
    if(!user){
        return res.status(401).send("THE EMAIL DOESN'T EXISTS");
    } else {
        if(user.password != req.body.password){
            
            return res.status(401).send("WRONG PASSWORD");
        } else {
            const token = jws.sign({type:user.type}, 'timepoint');
            res.send(token);
        }
    }

};

sessionController.post = async function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send("UNTHORIZE REQUEST");
    }

    const token = req.headers.authorization.spllit(' ')[1];
    
    if(token === null){
        return res.status(401).send("UNTHORIZE REQUEST");
    }

    const data = jws.verify(token, 'timepoint');
    req.token =  data;  
    console.log(data);

    next;
}

module.exports = sessionController;