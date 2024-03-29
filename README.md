# SendMail-GCF-HttpsOnCall
## Introduction
SendMail using a google account and Google Cloud Function for a Contact Form in the server side using nodemailer

On this topic, a function of Google Cloud Function service in Firebase to send mails from a google account to another google account is shown. 
The function is `Https.OnCall`, with which you can make calls for a Https request using a client app, like a webpage. 
On this example, I have made a contact form using html and javascript language. When button send is pressed, the function `sendMailTo` of the javascript file `contact.js` send a call to the Google Cloud Function `sendMail`, which send the mail using the data of the contact form to a `dest` mail. 

First of all, you need to upload the function in the file `index.js` to the Google Cloud Function, using yours parameters:

+ contactmail: contactformexample@gmail.com (create a google account for this purpose)
+ pass: passwordofcontactform
+ dest: destinationofmails@gmail.com (your personal mail)

Also, you have to give the access for thirdy-party sites and app of the `contactmail` mail. You can information about this on https://support.google.com/accounts/answer/3466521?hl=en

So, this app let you send mails from `contactmail` to `dest` using the message of the contact form. 

## Google Cloud Functions
After select a folder working, run `firebase login` and `firebase init`  commands, etc, you have to install nodemail cors using commmands `npm install nodemailer cors`. 

After, you have to add the function in:

+ index.js

to the Google Cloud Function, copying the content to the file of the same name in the folder of your firebase project. 

## Contact Form
This is the most extremely simple contact form, just for learning purpose. It is composed of `contact.html` and `contact.js` files. IT IS IMPORTANT! that you have to add your api credentials of your Firebase Project in the contact.html form. You can find more information about this on https://firebase.google.com/docs/web/setup?hl=es and https://firebase.google.com/docs/web/setup?hl=es#add-sdks-initialize. 

