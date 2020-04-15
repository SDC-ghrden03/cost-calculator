// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {user:process.env.DB_USER, password: process.env.DB_PASS, database: 'cost_calculator'},
    migrations: {
      directory: './server/db/migrations'
    }
  }  
};
