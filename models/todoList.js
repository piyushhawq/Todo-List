// import mongoose 
const mongoose = require('mongoose');

// this is the DataBase schema
const todoSchema = new mongoose.Schema({
    // data in schema 
    description:{
        // type of parameter 
        type: String,
        // cannot be null 
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    check:{
        type: String,
        required: true
    }
});

const Todo = mongoose.model('todoList', todoSchema);

// exporting the todo
module.exports = Todo;