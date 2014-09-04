var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  res.end('hello api');

});

router.get('/alumni', function(req, res){
	
	res.writeHead(200, {'Content-Type': 'application/json'});
	fs.createReadStream('data/alumniData.json').pipe(res);
});

router.get('/social', function(req, res){
	
	res.writeHead(200, {'Content-Type': 'application/json'});
	fs.createReadStream('data/socialMedia.json').pipe(res);
});

module.exports = router;