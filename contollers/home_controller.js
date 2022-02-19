// import database model
const Todo = require('../models/todoList');

// controller function for route '/'
module.exports.home = function(req, res){

    Todo.find({}, function (err, todolist) {
        // error 
        if (err) {console.log('error in fetching todolist from db');return;}

        return res.render('home', {
            // setting the title of the website 
            title: "my TodoList",
            todo_list: todolist
        });

    });


}