// require express for setting up the express server
const express = require('express');

// set up the port number
const port = process.env.PORT || 8000;

// using express
const app = express();

// Redirect all to index.js inside routes directory
app.use('/', require('./routes'));

// Setting view engine as ejs
app.set('view engine', 'ejs');
// Setting path for views
app.set('views', './views');

// use static files, present in assets directory
app.use(express.static('assets'));

// Setting express to listen to port 8000
app.listen(port, function (err) {
    // detected error 
    if (err) {
        console.log('err on port: ', err);
    }
    // server running 
    console.log(`server running on port: ${port}`);
});