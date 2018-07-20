var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var multer = require('multer')
var cookieParser = require('cookie-parser')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(multer({ dest: '/tmp/'}));
app.use(cookieParser());

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/', (req, res) => {
	res.send('Hello World')
})

var server = app.listen(8081, () => {
	console.log(server.address())
	var host = server.address().address;
	var port = server.address().port;

	console.log('server is listening at http://'+ host+ ':'+ port)
})
