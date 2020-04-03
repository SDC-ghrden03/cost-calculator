
exports.up = async function(knex) {
  
    await knex.schema.createTable('cars', function (table) {
        table.increments('id').primary();
        table.integer('price').notNullable();
     })

};

exports.down = async function(knex) {
  await knex.schema.dropTable("cars")
};
