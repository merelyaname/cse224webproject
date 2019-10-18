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
var auth = firebase.auth();

auth.onAuthStateChanged(function(user) {
  if (!user) {
    window.location.href = "./index.html";
  }
});

$(document).ready(function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //document.location.href="./index.html";
      var token = firebase.auth().currentUser.uid;
      var token2 = firebase.auth().currentUser.email;
      console.log(
        "a user logged in " +
          firebase.auth().currentUser.uid +
          " " +
          firebase.auth().currentUser.email
      );

      var user = firebase.auth().currentUser;

      queryDatabase();
    } else {
      // No user is signed in.
      //window.alert("NOPW");
      //document.location.href="./log.html"
      queryDatabase();
    }
  });
});

function queryDatabase() {
  firebase
    .database()
    .ref("/Comments/")
    .once("value")
    .then(function(snapshot) {
      var PostObject = snapshot.val();
      var currentRow;

      var keys = Object.keys(PostObject);

      for (var i = 0; i < keys.length; i++) {
        var currentObject = PostObject[keys[i]];

        currentRow = document.createElement("div");
        $(currentRow).addClass("row");

        dummycol = document.createElement("div");
        $(dummycol).addClass("col-md-8"); //setting class col-md-8
        $(currentRow).append(dummycol);

        dummycol2 = document.createElement("div"); //setting class card mb-4
        $(dummycol2).addClass("card mb-4");
        $(dummycol).append(dummycol2);

        dummycolname = document.createElement("div");
        $(dummycolname).addClass("card-body");
        $(dummycol2).append(dummycolname);

        dummycolfooter = document.createElement("div");
        $(dummycolfooter).addClass("card-footer text-muted");
        $(dummycol2).append(dummycolfooter);

        $("#contentHolder").append(currentRow);

        var col = document.createElement("div");
        $(col).addClass("col-lg-4");

        var name = document.createElement("p");
        $(name).html(currentObject.name);
        $(name).addClass("contentName");

        //caption to be written

        var desc = document.createElement("p");
        $(desc).html(currentObject.message);
        $(desc).addClass("card-text");

        $(dummycolfooter).append(name);

        $(dummycolname).append(desc);
        //$(dummycolname).append(but);

        $(currentRow).append(col);

        console.log("done");
      }
      //console.log(keys);//to check if its working
    });
}
