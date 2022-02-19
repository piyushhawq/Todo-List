// require express for setting up the express server
const express = require('express');

// setting up the Router 
const router = express.Router();

// requiring the movie controller 
const todosController = require('../contollers/todo_controller');

// Middleware to decode data coming from browser
router.use(express.urlencoded({extended: true }));

// this will handle the requests coming to /todos/create-todo 
// and execute create function from todo_controller.js
router.post('/create-todo', todosController.create);

// this will handle the requests coming to /todos/delete-todo 
// and execute create function from todo_controller.js
router.post('/delete-todo', todosController.delete);

// this will handle the requests coming to /todos/delete-todo-single 
// and execute create function from todo_controller.js
router.get('/delete-todo-single/', todosController.deleteSingle);

// this will handle the requests coming to /todos/todoData/:id 
// and execute create function from todo_controller.js
router.get('/todoData/:id', todosController.todos);

// this will handle the requests coming to /todos/update/:id 
// and execute create function from todo_controller.js
router.post('/update/:id', todosController.update);

// exporting the router
module.exports = router;