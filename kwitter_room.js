



const firebaseConfig = {
      apiKey: "AIzaSyC7rEa6ghRSsY4B9ZcQj5bNpWW3p4T2DlA",
      authDomain: "kwitter-4e9ae.firebaseapp.com",
      databaseURL: "https://kwitter-4e9ae-default-rtdb.firebaseio.com",
      projectId: "kwitter-4e9ae",
      storageBucket: "kwitter-4e9ae.appspot.com",
      messagingSenderId: "630776742915",
      appId: "1:630776742915:web:c9859b7936f50e881f7a36"
    };
    
    
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name") ; 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() 
{
  room_name = document.getElementById("room_name").value ;
  firebase.database().ref("/").child(room_name).update ({
    purpose : " adding room name"
  }) ; 
  localStorage.setItem("room_name" , room_name) ; 
  window.location = "kwitter_page.html"
}


function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      //Start code
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>" ; 
      // document.getElementById("output").innerHTML += row ; 
      document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + row ; 
      //End code
      });});}
getData();

function  redirectToRoomName(name) {
  console.log(name); 
  localStorage.setItem("room_name", name); 
  window.location = "kwitter_page.html";
} 

function logout() {
  localStorage.removeItem("user_name") ; 
  localStorage.removeItem("room_name") ;
  window.location = "index.html" ; 
}