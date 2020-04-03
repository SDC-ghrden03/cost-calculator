exports.up = async function(knex, Promise) {


        await knex.schema.createTable('location', function (table) {
           table.increments('id').primary();
           table.integer('zipcode').notNullable();
           table.decimal('creditscore').notNullable();
        })   
        
};


exports.down =  async function(knex, Promise) {
    await knex.schema.dropTable("location")    
};
