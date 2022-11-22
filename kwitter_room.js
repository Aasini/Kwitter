
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD13q5USmrRQZaPKFThzgvQng4TVqLLYR0",
      authDomain: "kwitter-44f93.firebaseapp.com",
      databaseURL: "https://kwitter-44f93-default-rtdb.firebaseio.com",
      projectId: "kwitter-44f93",
      storageBucket: "kwitter-44f93.appspot.com",
      messagingSenderId: "316828406236",
      appId: "1:316828406236:web:4344eaeab737238f9aff19"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

    function addRoom()
     { 
      room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update
       ({ purpose : "adding room name"
       }); localStorage.setItem("room_name", room_name); 
       window.location = "kwitter_page.html"; 
      }
    
      function getData()
       {
             firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
              snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
                   Room_names = childKey;
                    console.log("Room Name - " + Room_names);
                     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                      document.getElementById("output").innerHTML += row;
                   }); }); }
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="Kwitter.html";
}