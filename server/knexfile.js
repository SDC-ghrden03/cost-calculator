// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cost_calculator',
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    }
  }

  
};
