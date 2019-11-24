const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin:true});
admin.initializeApp();

var USER = 'contactformexample@gmail.com';
var PASS = 'passwordofcontactform';
var DEST = 'destinationofmails@gmail.com';



let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: USER,
        pass: PASS
    }
});


exports.sendMail = functions.https.onCall((data) => {
    const dest = DEST;
    const bodymss=data.body;
    const namemss=data.name;
    const emailmss=data.email;

    const mailOptions = {
        from: emailmss, // Something like: Jane Doe <janedoe@gmail.com>
        to: dest,
        subject: namemss + ' ' + 'Contact Form', // email subject
        html: `<p><b>Name : ${namemss} </b><p> 
               <p><b>Mail : ${emailmss}</b><p>
               <p></p>
               ${bodymss}`
    };
    
    var sent=false;
    return transporter.sendMail(mailOptions).
    then((info)=> {return {resultado:true}})
    .catch((error) => {return {resultado:false}});
});