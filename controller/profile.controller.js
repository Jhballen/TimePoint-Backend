require('../database/db.connection');
const profileModel = require('../model/profile.model');
const profileController = {};
const jws = require('jsonwebtoken');

profileController.getAll = async function(req, res){
    try {
        const data = await profileModel.find();
        res.send(data);
    } catch (err) {
        res.status(500).send({
            menssage: 'ERROR IN THE DATABASE'
        });
    }
}
profileController.getById = async function(req, res){
    try {
        const data = await profileModel.find({userId: req.params.UserId});
        res.send(data);
    } catch (err) {
        res.status(500).send({
            menssage: 'ERROR IN THE DATABASE'
        });
    }
}

profileController.delele = async function(req, res) {
    try {
        const id = req.params.UserId;
        const data = await profileModel.delele({_id:id});
        res.send(data);
    } catch (err) {
        res.status(500).send({
            menssage: 'ERROR IN THE DATABASE'
        });
    }
}

profileController.update = async function(req, res){
    try {
        const data = await profileModel({ _id: req.body._id }, 
            {name: req.body.name, picture: req.body.profilePicture,tasks: req.body.tasks});
    } catch (err) {
        res.status(500).send({
            menssage: 'ERROR IN THE UPDATE'
        });
    }
}

profileController.post = async function(req, res){
    if (!req.body) {
        res.status(500).send({
            menssage: 'ERROR, THE BODY IS EMPTY'
        });
    } else {
        const newProfile = new profileModel(req.body);
        newProfile.save((err, profile) => {
            if (err) {
                res.status(500).send({
                    menssage: 'ERROR, ADD PROFILE'
                });
            } else {
                res.send(newProfile);
            }
        });
    }
};
module.exports = profileController;