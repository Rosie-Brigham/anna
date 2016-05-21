var express = require('express');
var router = express.Router();

var quotes = require('../models/quotes.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  quotes.random()
    .then(function(quoteObj) {
      res.render('index', { quote: quoteObj[0].quote, author: quoteObj[0].author });
    })
    .catch(function(err) {
      res.body(err);
    })
});

module.exports = router;
