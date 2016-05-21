
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('quotes', function(table) {
    table.increments()
    table.text('quote')
    table.string('author')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quotes')
};
