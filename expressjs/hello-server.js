var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var multer = require('multer')
var cookieParser = require('cookie-parser')
var morgan=require('morgan')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(multer({ dest: './cache'}).any());
app.use(function(req, res, next) {
    morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[Content-Length] ":referrer" ":user-agent" ":compression"')(req, res, next);
});


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


