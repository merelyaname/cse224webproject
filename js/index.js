// setup materialize components
/*
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});*/

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC8Z4YgvO0LIH_dMLTOTufpYWyfUaN4RsE",
    authDomain: "cse224uno.firebaseapp.com",
    databaseURL: "https://cse224uno.firebaseio.com",
    projectId: "cse224uno",
    storageBucket: "",
    messagingSenderId: "879001323475",
    appId: "1:879001323475:web:799164fa5f0580ad7c1126"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById('contactus').style.display = 'block';
	console.log("logged in");
  } else {
	document.getElementById('contactus').style.display = 'none';
  }
});