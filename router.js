const router = require('express').Router();

//CONSTROLLER LIST
const taskController = require('./controller/task.controller');
const userController = require('./controller/user.controller');

//TASK
router.get('/task', taskController.getAll);
router.post('/task', taskController.post);


//USER
router.get('/user', userController.getAll);
router.post('/user', userController.post);

module.exports = router;