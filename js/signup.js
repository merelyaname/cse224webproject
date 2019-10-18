
  document.getElementById('form_signin').addEventListener('submit',submitForm);//submit button paoar shathe shathe will call submitform

var msgref= firebase.database().ref('user');//creats a table in the database named messages





function submitForm(e)
{
  e.preventDefault();//prevents html from doing any default work upon getting an event

  var name= getInputVal('inputUsername');
  var email= getInputVal('inputEmail');
  //inputPassword
  var pass= getInputVal('inputPassword');
  //var message= getInputVal('message');

  saveMessage(name,email,pass);

  /*document.querySelector('.alert').style.display='block';

  setTimeout(function(){
    document.querySelector('.alert').style.display='none';
  },3000);*/

  document.getElementById('form_signin').reset();

  setTimeout(function(){
    document.location.href="./index.html";
  },2000);

}

function getInputVal(id)
{
  return document.getElementById(id).value; //returning the value of designated id
}

function saveMessage(name,email,pass)
{
  var newmsgref= msgref.push();

  newmsgref.set({
    name: name,
    email:email,
  });



  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...

      window.alert("error" +errorMessage);
    });
}


function logout(){
  firebase.auth().signOut();
  document.location.href="./demo.html";
}


function hello(){
	document.location.href="./demo.html";
}
