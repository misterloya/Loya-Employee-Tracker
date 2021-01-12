// Import the mysql package
const mysql = require('mysql');
const util = require('util');

// Connect to the ice_creamDB database using a localhost connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'cms',
});


connection.query = util.promisify(connection.query);

module.exports = connection;