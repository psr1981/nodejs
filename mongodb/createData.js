var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017"

MongoClient.connect(url, function(err, db) {
	if (err) throw err
	var dbo = db.db("users");
	var mylogin = {userId:'ravi-' + (new Date()).getTime() , password:'test' }
	dbo.collection('logins').insertOne(mylogin, function(err, res) {
		if (err) throw err
		console.log('document created')
		db.close();
	})

})
