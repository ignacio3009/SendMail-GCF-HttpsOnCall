function sendMailTo(){

    var bodymss=document.getElementById("MESSAGE").value;
    var emailmss=document.getElementById("MAIL").value;
    var namemss=document.getElementById("NAME").value;

    var sendMail  = firebase.functions().httpsCallable('sendMail');
    sendMail({body:bodymss, email:emailmss, name:namemss}).then(function(result) {

      var status = result.data["resultado"];
      if(status){
        console.log("Sent!");
      }else{
        console.log("Not Sent!");
      }

      }).catch(function(error) {

      console.log(error.toString());
      console.log("Not Sent!");

    });
}
