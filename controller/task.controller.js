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

taskController.delete = async function(req, res){
    try{    
        const id= req.params._idTask;
        const data = await taskModel.deleteOne({_id:id});
        res.send(data);

    }catch(err){
        res.status(500).send({
            menssage: 'ERROR IN THE DATABASE'
        });
    }
}

taskController.put = async function(req, res){
    try{    
        const id= req.params._idTask;
        const status= req.body.status;
        const title = req.body.title;
        const date = req.body.date;
        const profile = req.body.profile;
        const description = req.body.description;
        const evidence = req.body.evidence;
        const data = await taskModel.update({_id:id}, {status: status},
        {title:title}, {description:description}, {date:date}, {evidence:evidence}, {profile:profile} );
        console.log(data)
        res.send(data);

    }catch(err){
        console.log(err);
        res.status(500).send({
            menssage: 'ERROR IN THE DATABASE'
        });
    }
}




module.exports = taskController;