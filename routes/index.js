const router = require('express').Router();
const jws = require('jsonwebtoken');

router.get('/', (req,res)=> res.send('BIENVENIDO A EL BACKEND DE TIMEPOINT'))


//CONSTROLLER LIST
const taskController = require('../controller/task.controller');
const userController = require('../controller/user.controller');
const sessionController = require('../controller/session.controller');
const profileController = require('../controller/profile.controller');

//TASK
router.get('/task', taskController.getAll);
router.post('/task', taskController.post);
router.delete('/task/:_idTask', taskController.delete);
router.put('/task/:_idTask', taskController.put);


//USER
router.get('/user' , userController.getAll);
router.post('/user', userController.post);
router.get('/user/:username', userController.getByUsername);
router.put('/user/:_idUser', userController.put);
router.post('/singin', sessionController.post);

//PROFILE
router.get('/profile', profileController.getAll);
router.get('/profile/:UserId', profileController.getById);
router.post('/profile', profileController.post);
router.delete('/profile/:idProfile', profileController.delete);
router.put('/profile', profileController.update);

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