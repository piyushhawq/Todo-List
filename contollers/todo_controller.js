// importing the DataBase
const db = require('../config/mongoose');

// importng the Schema For todoList
const Todo = require('../models/todoList');

// creating todos
module.exports.create = function (req, res) {

    // To create new todo and store in database
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date,
        check: req.body.check

    }, function (err, newTodo) {

        // error 
        if (err) {console.log('error in creating a todo');return}

        return res.redirect('back');
    });

}

// passing data 
module.exports.todos = function(req, res){

    Todo.findById(req.params.id, function(err, todo){
        return res.render('editTodo', {
            // setting the title of the website 
            title: 'edit todo',
            todo_data : todo
        });
    });

}

// This function can delete a todo or a list of todos from database.
module.exports.delete = function(req, res){

    let id = req.query;

    var deleteTask = Object.keys(req.body);

    for(i of deleteTask){
        Todo.deleteOne({_id: i } , function (err) {

            // error 
            if (err) {console.log('error in deleting one an todo from db', err);return;}       
        });
    }
    return res.redirect('back');

}

// this function will delete a single todo based on the id 
module.exports.deleteSingle = function(req, res){

    let id = req.query.id;

    // finding and deleting todo from the database
    Todo.findByIdAndDelete(id, function (err) {

        // error 
        if (err) {console.log('error in deleting single an object from db');return;}

        return res.redirect('back');
    });
}


// updating todo database 
module.exports.update = function(req, res){

    // finding and updating todo from the database
    Todo.findByIdAndUpdate(req.params.id, req.body, function(err, user){

        // error 
        if(err){console.log('error in updating the task ', err);return res.redirect('back');}
        
        return res.redirect('back');
    });
    
}
