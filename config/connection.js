// Set up MySQL connection.
const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // NOTE: Be sure to add your MySQL password here!
    password: 'your_current_password',
    database: 'burgers_db',
})
};

// Make connection.
connection.connect();
// Export connection for our ORM to use.
module.exports = connection;
