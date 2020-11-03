// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var apiRoutes= require("./routes/apiRoutes");
var view = require("./routes/view");


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.use('/api', apiRoutes);
app.use('/', view);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });






