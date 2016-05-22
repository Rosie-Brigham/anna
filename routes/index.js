var express = require('express');
var router = express.Router();

var quotes = require('../models/quotes.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  var quoteObj = quotes.random()
  res.render('index', { quote: quoteObj.quote, author: quoteObj.author });
});

module.exports = router;
