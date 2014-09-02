var express = require('express');
var app = express();
var http = require('http');

app.set('port', process.env.PORT || 8000);

app.use(express.static(__dirname + '/'));

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});

module.exports = app;
