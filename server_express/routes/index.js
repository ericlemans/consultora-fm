var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var engines = require("consolidate");
var http = require('http');
var path = require("path");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// Express will serve up production assets like our main.js file or main.css file
router.use(express.static('frontend/build'))

// Express will serve up the index.html file if it doesn't recognize the route
router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
})

module.exports = router;
