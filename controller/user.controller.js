require('../database/db.connection');
const userModel = require('../model/user.model');
const userSchema = require('../model/user.model');
const userController = {};
const jws = require('jsonwebtoken');

userController.getAll = async function(req, res){
    try {
        const data = await userModel.find();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            menssage: 'ERROR IN THE DATABASE'
        });
    }
};
userController.post = async function(req, res){
    if(!req.body){
        res.status(500).send({
            menssage: 'ERROR, THE BODY IS EMPTY'
        });
    }else {
        const newUser = new userModel(req.body);
        newUser.save((err,user)=>{
            if(err){
                res.status(500).send({
                    menssage: 'ERROR TO INSERT TASK'
                });
            }else{
                const token = jws.sign({type:newUser.type}, 'timepoint');
                res.send(token);
            }
        });
    }
};

module.exports = userController;