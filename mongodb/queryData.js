var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017"

MongoClient.connect(url, function(err, db) {
	if (err) throw err
	var dbo = db.db("users");
	//dbo.collection('logins').find({'password':'kkkk'}).toArray(function(err, res) {
	dbo.collection('logins').find({}).toArray(function(err, res) {
		if (err) throw err
		console.log(res)
		db.close();
	})

})
