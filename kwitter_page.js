var firebaseConfig = {
      apiKey: "AIzaSyArc-XqP019PrQvxTOVCEkU8WVTFtZFYmE",
      authDomain: "kwitter-practice-707d5.firebaseapp.com",
      databaseURL: "https://kwitter-practice-707d5-default-rtdb.firebaseio.com",
      projectId: "kwitter-practice-707d5",
      storageBucket: "kwitter-practice-707d5.appspot.com",
      messagingSenderId: "787365640372",
      appId: "1:787365640372:web:125056e45fdd806158bfe1"
    };

    firebase.initializeApp(firebaseConfig);

var username = localStorage.getItem("username");
var roomname = localStorage.getItem("roomname");

function send(){
      var msg = document.getElementById("message").value;
      firebase.database().ref(roomname).push({
            name: username, 
            message: msg,
            like: 0
      });
      document.getElementById("message").value = "";
}

function getData() {firebase.database().ref("/"+roomname).on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

var name = message_data['name'];
var message = message_data['message'];
var like = message_data['like'];
var nametag = "<h4>" + name + "<img src = 'tick.png' class = 'user_tick'></h4>";
var messagetag = "<h4 class = 'message_h4'>" + message + "</h4>";
var likebutton = "<button class = 'btn btn-warning' id = " + firebase_message_id + " value = " + like + " onclick = 'update(this.id)'>";
var spantag = "<span class = 'glyphicon glyphicon-thumbs-up'> like: " + like + "</span></button><hr>";
var row = nametag + messagetag + likebutton + spantag;
document.getElementById("output").innerHTML += row;

      } });  }); }
getData();

function update(message_id){
      var buttonId = message_id;
      var likesValue = document.getElementById(buttonId).value;
      var updateLikes = Number(likesValue) + 1;
      firebase.database().ref(roomname).child(message_id).update({
            like: updateLikes
      });
}
function logOut(){
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name"); 
      window.location.replace("index.html"); 
}