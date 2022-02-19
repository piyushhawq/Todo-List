// require the mongoose library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/todo_list_db');

// aquire the connection
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// up and running then print the successfully message
db.once('open', function(){
    console.log('successfully connected to db');
});

// exporting the database
module.exports = db;