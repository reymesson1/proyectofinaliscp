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

  return{
    
    getServices: getServices
  }
      
}      