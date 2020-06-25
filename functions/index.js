const functions = require("firebase-functions");

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mihy-all.firebaseio.com",
});

var db = admin.database();
var ref = db.ref("jira-clone");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.addProject = functions.https.onRequest((request, response) => {
  const { body = {} } = request;
  const { projects = {} } = body;
  ref
    .child("projects")
    .push()
    .set(projects, (res) => {
      response.send({ message: "Projects succesfully created" });
    });
});

exports.getAllProjects = functions.https.onRequest((request, response) => {
  ref.child("projects").once("value", function (snapshot) {
    console.log(snapshot.val());
    response.send({ projects: snapshot.val() });
  });
});
