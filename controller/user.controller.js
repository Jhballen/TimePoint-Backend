require('../database/db.connection');
const userModel = require('../model/user.model');
const profileSchema = require('../model/profile.model');
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

userController.getByUsername = async function(req, res){
    try {
        const data = await userModel.findOne({mail: req.params.username});
        res.send(data);
    } catch (err) {
        res.status(500).send({
            menssage: 'ERROR IN THE DATABASE'
        });
    }
}

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
                res.send(newUser);
            }
        });
    }
};

userController.put = async function(req, res){
    try{    
        const id= req.params._idUser;
        const mail = req.body.mail;
        const password = req.body.password;
        const type = req.body.type;
        const porfiles = req.body.porfiles;
        const data = await userModel.update({_id:id}, {mail: mail, password:password, type:type, porfiles:porfiles});
        console.log(data)
        res.send(data);

    }catch(err){
        console.log(err);
        res.status(500).send({
            menssage: 'ERROR IN THE DATABASE'
        });
    }
}

module.exports = userController;