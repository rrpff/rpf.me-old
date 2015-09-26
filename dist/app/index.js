var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || 'localhost';

app.get('/', function (req, res) {
  res.status(200).send('hello!');
});

app.listen(PORT, HOST, console.log.bind(console,
  'App %d listening on %s:%d', process.pid, HOST, PORT)
);
