//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyB3IzhqFKivBmrnM6DXYPgtdcWk7mtmlOY",
      authDomain: "kwitter-5290f.firebaseapp.com",
      databaseURL: "https://kwitter-5290f-default-rtdb.firebaseio.com",
      projectId: "kwitter-5290f",
      storageBucket: "kwitter-5290f.appspot.com",
      messagingSenderId: "332363895899",
      appId: "1:332363895899:web:e559c733993175c7c85b7e"
    };
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
      msg = document.getElementById("msg").value;
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
