//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value;
}