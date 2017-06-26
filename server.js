var http = require('http');
var express = require('express')
// you will probably need to require more dependencies here.
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var colors = require('colors');
var path = require('path');
var hogan = require('hogan.js');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var engines = require('consolidate');
app.engine('html', engines.hogan); // tell Express to run .html files through Hogan
app.set('views', __dirname + '/templates'); // tell Express where to find templates, in this case the '/templates' directory
app.set('view engine', 'html'); //register .html extension as template engine so we can render .html pages
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(path.join(__dirname, 'public')));
// your app's code here

app.get('/', function(request, response) {
    console.log('- Request received: ', request.method.cyan, request.url.underline);
    response.render('home.html');
})

app.listen(8080, function() {
    console.log('- Server listening on port 8080'.grey);
});
