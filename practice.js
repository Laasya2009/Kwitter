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



function addUser() {
    user_name = document.getElementById("user_name").value ; 
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    }) ; 
}