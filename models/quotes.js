var Knex = require('knex');
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function random() {
 const quoteId = Math.floor((Math.random() * 119) + 1)
 var quote = knex('quotes').where('id', quoteId)
 return quote
}

module.exports = {
  random: random,
}