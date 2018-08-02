var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(express.static('./dist/my-app'));

app.use(bodyParser.json());

var dba = require('./lib/dba-helper.js')();

app.get('/services', function(req,res){
   
      dba.getServices({}, function(data){
    
        res.send(data);        
  
      });
})

app.listen(4205, function(){
  console.log("Listening from 4205...");
});
