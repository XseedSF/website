const express = require('express');
var nodemailer = require("nodemailer");
const path = require('path');
const config = require('./config');
//import request from 'request';

const app = express();
const PORT = process.env.PORT || 5000;

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
//Comentar
/*var config = {};
config.mail_user = "dummy";
config.mail_pass = "dummy";


*/

var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: config.mail_user,
    pass: config.mail_pass
  }
});

/*------------------SMTP Over-----------------------------*/

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

app.get('/send',function(req,res){

  var mailText = `Contacto del usuario,
  Nombre: ${req.query.name}
  Mail: ${req.query.mail}
  Mensaje: ${req.query.text}`;

  var mailOptions={
    to : 'hello@xseedsf.com',
    subject : req.query.subject,
    text : mailText
  }

  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
      res.json({error: 'errrrrror'});
      //res.end("error");
    }else{
      console.log("Message sent: " + response.message);
      //res.end("sent");
      res.json({data: 'send'});
    }
  });
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

// function verifyHumanity(req) {
//   // Q is a nice little promise library I'm using in my project
//   const d = Q.defer();
//   const recaptchaResponse = req.body['g-recaptcha-response'];
//
//   request.post('https://www.google.com/recaptcha/api/siteverify', {
//     form: {
//       secret: RECAPTCHA_SECRET_KEY,
//       response: recaptchaResponse,
//       remoteip: req.connection.remoteAddress
//     }
//   }, (err, httpResponse, body)=>{
//     if(err) {
//       d.reject(new Error(err));
//     } else {
//       const r = JSON.parse(body);
//       if (r.success) {
//         d.resolve(r.success);
//       } else {
//         d.reject(new Error());
//       }
//     }
//   });
//
//   return d.promise;
// }
