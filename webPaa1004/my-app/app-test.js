var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(express.static('static'));

app.use(bodyParser.json());

var mailer = require('express-mailer');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

mailer.extend(app, {
  from: 'reymesson@gmail.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'reymesson@gmail.com',
    pass: '@ltagracia113'
  }
});

app.post('/sendemail', function (req, res) {
   
    app.mailer.send('email', {
    to: 'reymesson@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field. 
    subject: 'Message from subasta.com.do', // REQUIRED.
    otherProperty: 'Other Property', // All additional properties are also passed to the template as local variables.
    otherDetail: 'Other Detail' // All additional properties are also passed to the template as local variables.
    }, function (err) {
    if (err) {
      // handle error
      console.log(err);
      res.send('There was an error sending the email');
      return;      
    }
    res.send('Email Sent');      
  });

});

app.listen(4202, function(){
  console.log("Listening from 4202...");
});