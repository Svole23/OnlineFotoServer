const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const nodemailer = require('nodemailer');
var path = require('path');
app.use(express.static('dist'));

app.use(express.urlencoded())

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'aleksa.svorcan@gmail.com',
        pass: ''
    }
});

app.post('/', (req, res) => {
  const mailOptions = {
  from: '', // sender address
  to: 'aleksa.svorcan@gmail.com', // list of receivers
  subject: 'Porudzbina', // Subject line
  html:'<p>Imate novu porudzbinu pod imenom:</p>' 
  + '<p>' +'Ime i prezime: ' + req.body.name + '</p>' 
  + '<p>' +'Adresa: ' + req.body.adress + '</p>' 
  + '<p>' +'Telefon: '+ req.body.phone + '</p>'  
  + '<p>' +'Napomena: '+ req.body.details + '</p>' 
  + '<p>' +'Format: '+ req.body.size + '</p>' 
  + '<p>' +'Broj kopija: '+ req.body.copies + '</p>'
  + '<p>Posetite Vasu Dropbox bazu da biste preuzeli slike</p>'
  +'<p></p>'
  +'<p>Obavestenje: U slucaju da Vam neki tekst navodi undefined znaci da korisnik nije uneo taj podatak</p>'
  };
  transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
