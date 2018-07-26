module.exports = function(){ 
  
  function getServices(user,callback){ 
    
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/proyectofinal";
        MongoClient.connect(url, function(err, db) {
                  if (err) throw err;        
                    db.collection("services").find({}).toArray(function(err,result){            
                        callback(result);   
              })        
              db.close();
       });    
  }

  function setServices(service,callback){

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/proyectofinal";

    MongoClient.connect(url, function(err, db) {
      
            if (err) throw err;
            db.collection("services").insertOne(service, function(err, res) {
            
              if (err) throw err;
              console.log("1 record inserted");
              db.close();
        
            });      
    });
  }

  function setOffers(offer,callback){

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/proyectofinal";

    MongoClient.connect(url, function(err, db) {
      
            if (err) throw err;
            db.collection("services").updateOne({"id":parseInt(offer.id)},{"$push":{"offers":offer}}, function(err, res) {
            
              if (err) throw err;
              console.log("1 record updated");
              db.close();
        
            });      
    });
  }

  function setSuggestions(suggestion,callback){
    
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/proyectofinal";

    MongoClient.connect(url, function(err, db) {
      
            if (err) throw err;
            db.collection("services").updateOne({"id":parseInt(suggestion.id)},{"$push":{"suggestions":suggestion}}, function(err, res) {
            
              if (err) throw err;
              console.log("1 record updated");
              db.close();
        
            });      
    });
  }

  function removeSuggestions(suggestion,callback){
    
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/proyectofinal";

    MongoClient.connect(url, function(err, db) {
      
            if (err) throw err;
            db.collection("services").updateOne({"id":parseInt(suggestion.id)},{"$set":{"suggestions":[]}}, function(err, res) {
            
              if (err) throw err;
              console.log("1 record updated");
              db.close();
        
            });      
    });
  }

  function getUsers(user,callback){ 
    
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/proyectofinal";
        MongoClient.connect(url, function(err, db) {
                  if (err) throw err;        
                    db.collection("users").find({"username":user.username,"password":user.password}).toArray(function(err,result){            
                        callback(result);   
              })        
              db.close();
       });    
  }

  function setRegistration(registration,callback){
    
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/proyectofinal";
    
        MongoClient.connect(url, function(err, db) {
          
                if (err) throw err;
                db.collection("users").insertOne(registration, function(err, res) {
                
                  if (err) throw err;
                  console.log("1 user record inserted");
                  db.close();
            
                });      
        });
  }

  function setAssignTo(assignto,callback){
    
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/proyectofinal";

    MongoClient.connect(url, function(err, db) {
      
            if (err) throw err;
            db.collection("services").updateOne({"id":parseInt(assignto.id)},{"$set":{"assignTo":assignto.username}}, function(err, res) {
            
              if (err) throw err;
              console.log("1 record updated");
              db.close();
        
            });      
    });
  }

  function getEachUsers(user,callback){ 
    
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/proyectofinal";
        MongoClient.connect(url, function(err, db) {
                  if (err) throw err;        
                    db.collection("users").find({"username":user.username}).toArray(function(err,result){            
                        callback(result);   
              })        
              db.close();
       });    
  }

  function setUpdatedRegistration(user,callback){
    
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/proyectofinal";

    MongoClient.connect(url, function(err, db) {
      
            if (err) throw err;
            db.collection("users").updateOne({"username":user.username},{"$set":{"password":user.password}}, function(err, res) {
            
              if (err) throw err;
              console.log("1 record updated");
              db.close();
        
            });      
    });
  }

  return{
    
    getServices: getServices,
    setServices: setServices,
    setOffers: setOffers,
    setSuggestions: setSuggestions,
    removeSuggestions: removeSuggestions,
    getUsers: getUsers,
    setRegistration: setRegistration,
    setAssignTo: setAssignTo,
    getEachUsers: getEachUsers,
    setUpdatedRegistration: setUpdatedRegistration
  }
      
}      