var Knex = require('knex');
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

var quotesFile = require('../data/quotes')

var quotes = quotesFile[0]

function random() {
 const quoteNum = Math.floor((Math.random() * 119) + 0)
 const quote = quotesFile[quoteNum]
 // var quote = knex('quotes').where('id', quoteId)
 return quote
}

module.exports = {
  random: random,
}