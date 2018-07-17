var express = require('express');

var app = express();

app.use(express.static('static'))

var dba = require('./lib/dba-helper.js')();

app.get('/services', function(req,res){

    dba.getServices({}, function(data){

        res.send(data);
    });
})

app.listen(4201, function(){
    console.log('Listening from 4201...');
});
