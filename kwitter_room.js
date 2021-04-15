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

username = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome " + username + "!";

function addRoom(){
      roomname = document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("roomname", roomname);
      window.location = "kwitter_page.html";
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}
function logOut(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}