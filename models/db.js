const mariadb = require("mariadb");

const conn = mariadb.createConnection({
    host: 'localhost', 
    user:'root',
    password: '123',
    database: 'teste'
  })

module.exports = conn;  