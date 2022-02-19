// require express for setting up the express server
const express = require('express');

// Setup the Router
const router = express.Router();

// Setting path for controller function
const homeController = require('../contollers/home_controller');

// Setting controller function to a route
router.get('/', homeController.home);

// Route all requests starting with '/todos' to todos.js file
router.use('/todos', require('./todos'));

// exporting the router
module.exports = router;