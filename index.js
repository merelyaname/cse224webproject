var firebaseConfig = {
  apiKey: "AIzaSyC8Z4YgvO0LIH_dMLTOTufpYWyfUaN4RsE",
  authDomain: "cse224uno.firebaseapp.com",
  databaseURL: "https://cse224uno.firebaseio.com",
  projectId: "cse224uno",
  storageBucket: "cse224uno.appspot.com",
  messagingSenderId: "879001323475",
  appId: "1:879001323475:web:799164fa5f0580ad7c1126"
};

firebase.initializeApp(firebaseConfig);

var base_url = window.location.pathname;
var filename = base_url.substring(base_url.lastIndexOf("/") + 1);
console.log(filename);

if (filename == "index.html") {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      //document.getElementById("user_div").style.display = "block";
      if (document.getElementById("login_div") != null)
        document.getElementById("login_div").style.display = "none";

      var user = firebase.auth().currentUser;

      document.location.href = "./index2.html";

      window.alert("Welcome to anikas project");

      if (user != null) {
        var email_id = user.email;
        document.getElementById("user_para").innerHTML =
          "Welcome User : " + email_id;
      }
    } else {
      // No user is signed in.
      //document.getElementById("user_div").style.display = "none";
      //document.location.href="./log.html";
    }
  });
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    //document.getElementById("user_div").style.display = "block";

    if (document.getElementById("login_div") != null)
      document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
    if (filename != "index2.html") document.location.href = "./index2.html";

    // window.alert("Welcome to anikas project");

    if (user != null) {
      var email_id = user.email;
      if (document.getElementById("user_para") != null)
        document.getElementById("user_para").innerHTML =
          "Welcome User : " + email_id;
    }
  } else {
    // No user is signed in.

    //document.getElementById("user_div").style.display = "none";
    if (document.getElementById("login_div") != null)
      document.getElementById("login_div").style.display = "block";
    //document.location.href="./log.html";
  }
});

function login() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  console.log("bleh");

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);

      // ...
    });
}

function logout() {
  firebase.auth().signOut();
  window.location.href = "./log.html";
}
