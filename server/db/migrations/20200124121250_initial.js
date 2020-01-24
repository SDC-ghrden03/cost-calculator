exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('location', function (table) {
           table.increments('id').primary();
           table.integer('zipcode').notNullable();
           table.decimal('creditscore').notNullable();
        }),
        knex.schema.createTable('cars', function (table) {
           table.increments('id').primary();
           table.integer('price').notNullable();
        })
    ]);
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("location")
    .dropTable("cars");
};
