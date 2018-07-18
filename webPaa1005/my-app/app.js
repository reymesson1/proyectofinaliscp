var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(express.static('static'));

app.use(bodyParser.json());

var dba = require('./lib/dba-helper.js')();

app.get('/services', function(req,res){
   
      dba.getServices({}, function(data){
    
        res.send(data);        
  
      });
})

app.post('/addservices',function(req,res){

  console.log(req.body);  
})

app.listen(4201, function(){
  console.log("Listening from 4201...");
});
