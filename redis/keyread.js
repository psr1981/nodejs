var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('connected');

		client.hgetall('frameworks', function(err, object) {
			console.log('frameworks', object);
		});

});


