var Model = require('./models/models.js');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var db = "mongodb://localhost/mean_end_to_end";

mongoose.connect(db, function(err, response){
  if(err){
    console.log('Failed to connect to ' + db);
  }
  else {
    console.log('Connected to ' + db);
  }
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

app.get('/home', function(request, response){
  response.status(200).send("<h1>Welcome to the mean stack</h1>");
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
