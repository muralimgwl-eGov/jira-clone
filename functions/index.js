const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});


exports.addTask = functions.https.onRequest((request, response) => {
  // console.log("log", request);
  const {body}=request;
  console.log(body);
  //insert to RD
 response.send({"messages":"task added succesfully"});
});
