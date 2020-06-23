const firebase=require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyBf56OapCQ2H5LPA_zoc5yXldJLbPnT3hA",
  authDomain: "mihy-all.firebaseapp.com",
  databaseURL: "https://mihy-all.firebaseio.com",
  projectId: "mihy-all",
  storageBucket: "mihy-all.appspot.com",
  messagingSenderId: "734387907524",
  appId: "1:734387907524:web:7af234b60850bd05",
  measurementId: "G-RHDFJXGS3E"
};

firebase.initializeApp(firebaseConfig);

  // Get a reference to the database service
var database = firebase.database();
// console.log(database);

module.exports=database;
