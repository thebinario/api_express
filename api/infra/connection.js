const Pool = require("pg").Pool;
const config = require("config");

module.exports = () => {
  return new Pool({
    user: config.get('database.user'),
    host: config.get('database.host'),
    database: config.get('database.database'),
    password: config.get('database.password'),
    port: config.get('database.port')
  })
}