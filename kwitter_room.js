var firebaseConfig = {
    apiKey: "AIzaSyARTWYMfsypwDAH6sceYvhuFQYgTLXck8w",
    authDomain: "kwitter-7a3de.firebaseapp.com",
    databaseURL: "https://kwitter-7a3de-default-rtdb.firebaseio.com",
    projectId: "kwitter-7a3de",
    storageBucket: "kwitter-7a3de.appspot.com",
    messagingSenderId: "235214242469",
    appId: "1:235214242469:web:3921797c75f41800eac34c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + name +"!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class'room_name'id="+Room_names+" onclick'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}