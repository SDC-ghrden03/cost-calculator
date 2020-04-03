// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {user: 'dev', password: 'devOps', database: 'cost_calculator'},
    migrations: {
      directory: './server/db/migrations'
    }
  }  
};
