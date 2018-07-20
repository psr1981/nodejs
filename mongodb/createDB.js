var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/users";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("user db database created!");
  db.close();
});

