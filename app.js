const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

//configure app uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

//get request to url
app.get('/', (req, res) => {
	res.sendFile('index.html');
});

//this starts the server
app.listen(port, () => {
	console.log("Server is running!");
});