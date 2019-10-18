// var firebaseConfig = {
//     apiKey: "AIzaSyC8Z4YgvO0LIH_dMLTOTufpYWyfUaN4RsE",
//     authDomain: "cse224uno.firebaseapp.com",
//     databaseURL: "https://cse224uno.firebaseio.com",
//     projectId: "cse224uno",
//     storageBucket: "cse224uno.appspot.com",
//     messagingSenderId: "879001323475",
//     appId: "1:879001323475:web:799164fa5f0580ad7c1126"
//   };

//   firebase.initializeApp(firebaseConfig);

//var messagesRef = firebase.database().ref('updates-c5173');

//document.getElementById('commentForm').addEventListener('submit', comForm);

//var messagesRef = firebase.database().ref('updates-c5173');

function comForm(e) {
  e.preventDefault();

  var name = getInputVal("uname");
  var message = getInputVal("message");

  console.log("read");

  saveMessage(name, company, email, phone, message);
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}

//var fileButton=getInputVal('im_file');

document.getElementById("comment_btn").addEventListener("click", function(e) {
  if (!$("#uname").val() || !$("#message").val()) {
    window.alert("Please fill up other sections before submitting");
    //document.getElementById('commentForm').reset();
    //console.log("ooo");
  } else {
    //console.log("at else");
    //console.log($("#uname").val()+" "+$("#message").val());

    var postKey = firebase
      .database()
      .ref("Comments/")
      .push().key;
    //var downloadURL=task.snapshot.downloadURL;

    var updates = {};
    var postData = {
      //url:downloadURL,
      name: $("#uname").val(),
      //title:$("#ptitle").val(),
      // mail: $("#email").val(),
      message: $("#message").val()
      //contact:$("#contact").val(),
      //mail:firebase.auth().currentUser.email,
      //zone:$("#zone").val(),
      //time:ts.toLocaleString()
    };
    updates["/Comments/" + postKey] = postData;

    firebase
      .database()
      .ref()
      .update(updates);

    console.log("done");
    window.alert("Redirecting to user feedback page");

    setTimeout(function() {
      document.location.href = "./comments.html";
    }, 2000);
  }

  /*else {



    var file=e.target.files[0];

    var storageRef=firebase.storage().ref('sweet/'+ file.name);

    var task=storageRef.put(file);


    task.on('state_changed',

    function progress(snapshot){

        //var percentage=(snapshot.bytesTransferred/snapshot.totalBytes)*100;

        //uploader.value=percentage;
        update();
    },


    function error(err){


    },

    function complete(){

      task.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);
      });



      var postKey=firebase.database().ref("Posts/").push().key;
      var downloadURL=task.snapshot.downloadURL;

      var updates={};
      var postData={
        url:downloadURL,
        name:$("#name").val(),
        title:$("#ptitle").val(),
        desc:$("#desc").val(),
        //mail:$("#email").val(),
        contact:$("#contact").val(),
        mail:firebase.auth().currentUser.email,
        zone:$("#zone").val(),
        time:ts.toLocaleString()
      };
      updates['/Posts/' +postKey]=postData;

      firebase.database().ref().update(updates);

      console.log('done 2');



    }

  );//task on end

  }//if/else end right ere*/

  //console.log("xxx");
});
