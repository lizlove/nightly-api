var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectId;


var CONTACTS_COLLECTION = 'contacts';


var app = express();
app.use(express.static(__dirnam + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback
// to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, database){
  if (err) {
    console.log(err);
    process.exit(1);
  }
  // Save database object from the callback for reuse.
  db = database;
  console.log('Database connection ready');

  // Initialize the server
  var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App running on port", port);
  })
});


// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code){}
