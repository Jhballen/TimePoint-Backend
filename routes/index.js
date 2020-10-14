const router = require('express').Router();
const jws = require('jsonwebtoken');

router.get('/', (req,res)=> res.send('BIENVENIDO A EL BACKEND DE TIMEPOINT'))


//CONSTROLLER LIST
const taskController = require('../controller/task.controller');
const userController = require('../controller/user.controller');
const sessionController = require('../controller/session.controller');

//TASK
router.get('/task', taskController.getAll);
router.post('/task', taskController.post);


//USER
router.get('/user' , userController.getAll);
router.post('/user', userController.post);

router.post('/singin', sessionController.post);

//AUTHENTIFICATION


module.exports = router;

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send("UNTHORIZE REQUEST");
    }

    const token = req.headers.authorization.split(' ')[1];
    
    if(token === null){
        return res.status(401).send("UNTHORIZE REQUEST");
    }

    const data = jws.verify(token, 'timepoint');
    req.token =  data.type;

    next();
}