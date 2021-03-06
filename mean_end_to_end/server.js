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

var router = express.Router();

// GET
router.get('/api/users', function(request, response){

  Model.find({}, function(err, users){
    if(err){
      response.status(404).send(err);
    }
    else {
      response.status(200).send(users);
    }
  });

});

app.use('/', router);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
