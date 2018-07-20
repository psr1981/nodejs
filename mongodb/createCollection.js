var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017"

MongoClient.connect(url, function(err, db) {
	if (err) throw err
	var dbo = db.db('users');
	dbo.createCollection("logins", function(err, res) {
		if (err) throw err
		console.log("collection created")
		db.close()
	})
})
