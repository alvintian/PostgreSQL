module.exports = {
  client: 'pg',
  // connection: 'postgres://localhost:5432/test_db'
  connection: {
    user: 'development',
    password: 'development',
    database: 'test_db',
    host: 'localhost',
    port: 5432
  }
};