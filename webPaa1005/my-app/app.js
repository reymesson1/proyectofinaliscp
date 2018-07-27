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

  dba.setServices(req.body);  
  res.send(req.body);
})

app.post('/updateoffers',function(req,res){

  console.log(req.body);
  dba.setOffers(req.body);
  res.send(req.body);
});

app.post('/updatesuggestions',function(req,res){
  
    console.log(req.body);    
    dba.setSuggestions(req.body);
    res.send(req.body);
});

app.post('/removesuggestions',function(req,res){

  dba.removeSuggestions(req.body);
  console.log(req.body);    
});

app.post('/authentication',function(req,res){
      
  dba.getUsers(req.body, function(data){        
    if(data.length==1){
      res.send(true);          
    }else{
      res.send(false);          
    }
  });
});  

app.post('/registration',function(req,res){

console.log(req.body);
dba.setRegistration(req.body);
});  

app.get('/users',function(req,res){
  dba.getUsers(req.body,function(data){
    res.send(data);
  });
})

app.post('/getusers',function(req,res){
  var user = req.body;  
  dba.getEachUsers({"username":user.username},function(data){        
    res.send(data);
  });
});

app.post('/setusers',function(req,res){  
  var user = req.body;  
  
  dba.setUpdatedRegistration({"username":user.username,"password":user.password},function(data){        
    res.send(data);
  });
})


app.post('/assignto',function(req,res){
    
  dba.setAssignTo(req.body); 
});

app.post('/forgotpassword',function(req,res){
  
  dba.forgot(req.body,function(data){        
   res.send(data);
 });
});

app.listen(4201, function(){
  console.log("Listening from 4201...");
});
