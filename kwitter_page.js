var firebaseConfig = {
      apiKey: "AIzaSyB2yi_YvyxzIeWZ-xEEPDPzx6sbVH9prNA",
      authDomain: "kwitter-9bc12.firebaseapp.com",
      databaseURL: "https://kwitter-9bc12-default-rtdb.firebaseio.com",
      projectId: "kwitter-9bc12",
      storageBucket: "kwitter-9bc12.appspot.com",
      messagingSenderId: "448483129823",
      appId: "1:448483129823:web:52919fa574444c2d13ac6a"
    };

 firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

 function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
 }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"; 
}