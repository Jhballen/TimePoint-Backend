require('../database/db.connection');
const taskModel = require('../model/task.model');

const taskController = {};

taskController.getAll = async function(req,res){

    try{
        
        const data = await taskModel.find();
        res.send(data);

    }catch(err){
        res.status(500).send({
            menssage: 'ERROR IN THE DATABASE'
        });
    }
};

taskController.post = async function(req,res){

    if(!req.body){
        res.status(500).send({
            menssage: 'ERROR, THE BODY IS EMPTY'
        });
    }else {
        const newTask = new taskModel(req.body);
        newTask.save((err,task)=>{
            if(err){
                res.status(500).send({
                    menssage: 'ERROR TO INSERT TASK'
                });
            }else{
                res.send(task);
            }
        });
    }
};

module.exports = taskController;