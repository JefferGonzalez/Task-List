const { Router } = require('express');
const {getAll, searchForId, addTask, updateTask, deleteTask} = require('../controllers/task.controller');

const router = Router();

router.get('/tasks', getAll);

router.get('/tasks/:id', searchForId);

router.post('/tasks', addTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);


module.exports = router;