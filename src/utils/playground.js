const database=require("./firebase");

// console.log(database);

// database.ref("egov-playgound/task").set({
//   name:"login",
//   status:"todo",
//   description:"login ui screen"
// })

var starCountRef = database.ref('admin');
starCountRef.once('value').then(function(snapshot) {
  console.log(snapshot.val());

});

console.log("hi");
