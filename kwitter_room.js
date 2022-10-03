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

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div> <hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";

}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}